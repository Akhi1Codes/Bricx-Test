const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
  'aol.com',
  'ymail.com',
  'protonmail.com',
  'zoho.com',
  'gmx.com',
  'mail.com',
  'mail.ru',
  'yandex.com',
  'qq.com',
  'mailinator.com',
  '10minutemail.com',
  'temp-mail.org',
  'guerrillamail.com',
  'dispostable.com',
  'trashmail.com',
  'sharklasers.com',
  'yopmail.com',
  'throwawaymail.com'
]);

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed);
}

export function isBusinessEmail(email: string): boolean {
  const trimmed = email.trim().toLowerCase();
  const atIndex = trimmed.lastIndexOf('@');
  if (atIndex === -1 || atIndex === trimmed.length - 1) {
    return false;
  }

  const domain = trimmed.slice(atIndex + 1);
  return !FREE_EMAIL_DOMAINS.has(domain);
}

export function getEmailDomain(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  const atIndex = trimmed.lastIndexOf('@');
  if (atIndex === -1 || atIndex === trimmed.length - 1) {
    return null;
  }

  return trimmed.slice(atIndex + 1);
}
