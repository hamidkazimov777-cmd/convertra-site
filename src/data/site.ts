// Real founder / contact details and prefilled inquiry links.
// Every CTA on the site resolves to one of these channels.

export const founder = {
  name: 'Hamid Kazimov',
  email: 'hamid.kazimov96@gmail.com',
  telegram: 'hamidkazim',
  telegramUrl: 'https://t.me/hamidkazim',
  whatsapp: '+994552982982',
  whatsappUrl: 'https://wa.me/994552982982',
  linkedin: 'https://www.linkedin.com/in/hamid-kazimov-a48a90365',
  github: 'https://github.com/hamidkazimov777-cmd',
};

/** Build a mailto: with a subject + body so each CTA opens a scoped inquiry. */
export function mailto(subject: string, body = ''): string {
  const params = new URLSearchParams();
  params.set('subject', subject);
  if (body) params.set('body', body);
  return `mailto:${founder.email}?${params.toString().replace(/\+/g, '%20')}`;
}

export const inquiries = {
  license: mailto(
    'Convertra AudioCore — Licensing inquiry',
    'Hi Hamid,\n\nWe are interested in licensing Convertra AudioCore (SDK / Commercial / Enterprise).\n\nCompany:\nProduct / platform:\nTarget platforms:\nExpected volume:\n\nThanks,'
  ),
  acquisition: mailto(
    'Convertra — Acquisition inquiry',
    'Hi Hamid,\n\nWe would like to discuss acquiring Convertra (code, AudioCore, brand and IP).\n\nCompany:\nContext:\n\nThanks,'
  ),
  whitelabel: mailto(
    'Convertra AudioCore — White-label / OEM inquiry',
    'Hi Hamid,\n\nWe want to integrate AudioCore under our own brand.\n\nCompany:\nProduct:\nPlatforms:\n\nThanks,'
  ),
  partnership: mailto(
    'Convertra — Partnership inquiry',
    'Hi Hamid,\n\nWe would like to explore a partnership.\n\nCompany:\nIdea:\n\nThanks,'
  ),
  investment: mailto(
    'Convertra — Investment inquiry',
    'Hi Hamid,\n\nWe are interested in investing in Convertra / AudioCore.\n\nFund / individual:\nStage / ticket:\n\nThanks,'
  ),
  general: mailto('Convertra AudioCore — Inquiry'),
};
