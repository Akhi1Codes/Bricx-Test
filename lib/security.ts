import { NextRequest } from 'next/server';

function normalizeHost(value: string | null): string | null {
  if (!value) return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      const url = new URL(trimmed);
      return url.hostname.toLowerCase();
    }

    const withoutScheme = trimmed.replace(/^https?:\/\//i, '').replace(/\/$/, '');
    const host = withoutScheme.split(':')[0].split('/')[0];
    return host.toLowerCase();
  } catch {
    return trimmed.toLowerCase();
  }
}

function sameHost(left: string | null, right: string | null): boolean {
  if (!left || !right) return false;
  return left.replace(/^www\./, '') === right.replace(/^www\./, '');
}

function isLocalHost(host: string | null): boolean {
  if (!host) return false;
  return ['localhost', '127.0.0.1', '::1', '0.0.0.0'].includes(host);
}

/**
 * Validates request origin and referer to reduce false rejections for same-site requests
 * while still rejecting clearly cross-origin traffic.
 */
export function securityCheck(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const host = request.headers.get('host') || '';

  const requestHost = normalizeHost(host);
  const originHost = normalizeHost(origin);
  const refererHost = normalizeHost(referer);

  if (!origin && !referer) {
    return true;
  }

  if (sameHost(originHost, requestHost) || sameHost(refererHost, requestHost)) {
    return true;
  }

  if (isLocalHost(originHost) || isLocalHost(refererHost) || isLocalHost(requestHost)) {
    return true;
  }

  return false;
}
