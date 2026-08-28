# Iris & Oak

A production-focused freelance software development website built for **Iris & Oak**.

Iris & Oak provides thoughtfully engineered websites, web applications and technical solutions for individuals, startups and small businesses.

> Thoughtfully engineered software, built to last.

## Overview

The Iris & Oak website is a production-focused Next.js application designed around a simple client journey: understand the services available, explore the approach to development and submit a structured project enquiry.

The site prioritises responsive design, clear communication and a calm, straightforward experience for prospective clients.

This repository is publicly available for **portfolio, demonstration and code-review purposes**. Iris & Oak and the source code contained within this repository remain proprietary.

## Features

- Responsive desktop and mobile experience
- Service and pricing presentation
- Expandable service details
- Multi-step client enquiry journey
- Service-specific project questions
- Review and amend workflow before submission
- Form validation and consent handling
- Separate custom project enquiry flow
- Transactional enquiry emails
- Mobile navigation
- Responsive layouts across common screen sizes

## Services

The website presents four primary service categories:

### Launch

Focused websites for businesses establishing their online presence.

### Refresh

Redesign and improvement of existing websites.

### Care

Ongoing website maintenance, monitoring and technical support.

### Custom Project

Tailored development for projects that fall outside the standard service packages.

Current service packages and pricing are available directly through the Iris & Oak website.

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- CSS

### Backend & Integrations

- Next.js API Routes
- Resend

### Development

- Git
- GitHub
- Node.js

## Client Enquiry Flow

The main enquiry experience uses a four-step client journey:

1. **About you**
2. **Your needs**
3. **Your project**
4. **Review and send**

Project questions adapt to the service selected by the client, allowing Iris & Oak to collect relevant project information without presenting unnecessary technical questions.

Before submission, clients can review their information and amend individual sections.

The enquiry flow also includes:

- Required-field validation
- Email validation
- Consent confirmation
- Service-specific project questions
- Clear, readable review summary
- Submission error handling
- Transactional email integration
- Successful submission confirmation
- Form reset for subsequent enquiries

A separate streamlined enquiry experience is provided for custom projects.

## Responsive Design

The interface has been designed for both desktop and mobile use.

The mobile experience includes:

- Dedicated mobile navigation
- Responsive typography and spacing
- Mobile-friendly enquiry forms
- Responsive service layouts
- Touch-friendly controls
- Adapted review and submission layouts

## Email Integration

Client enquiries are processed through server-side API routes and integrated with **Resend** for transactional email delivery.

Sensitive credentials and API keys are managed through environment variables and are not exposed through client-side code.

## Testing

v1.0.0 has been tested primarily through manual QA across the main user journeys and responsive layouts.

Automated testing is planned as part of a future release.

Current manual testing covers areas including:

- Navigation
- Responsive layouts
- Service interactions
- Form validation
- Multi-step enquiry navigation
- Review and amend functionality
- Consent validation
- Enquiry submission
- Email delivery
- Submission success states
- Form reset behaviour
- Desktop and mobile layouts

## Project Structure

```text
irisoak-next/
├── public/
├── src/
│   ├── api/
│   ├── app/
│   └── components/
├── .gitignore
├── LICENSE.md
├── .nvmrc
├── package.json
├── README.md
└── tsconfig.json
```

## Project Status

**v1.0.0 — MVP**

The core Iris & Oak website is feature-complete for its initial MVP release.

v1.0.0 includes the primary website experience, service presentation, responsive layouts, client enquiry workflows and transactional email integration.

Further improvements will be developed as separate releases rather than continuing to expand the initial MVP scope.

## Roadmap

Potential post-v1.0 improvements include:

- Additional case studies and client work
- Automated testing
- Accessibility and multilingual support
- Enquiry workflow enhancements
- Client account and project portal
- Proposal and invoicing integrations
- Additional business administration tooling

The roadmap is subject to change as Iris & Oak develops and real client requirements emerge.

## Security

Sensitive credentials and production configuration are managed using environment variables and are not committed to source control.

The public repository does not contain production API keys, credentials, client information or other secrets.

Any production-specific configuration that should not be publicly accessible is maintained separately from the public source code.

## Repository Usage

This repository is public so that prospective clients, recruiters and other interested parties can review the development work behind Iris & Oak.

Public visibility does **not** mean that the project is open source.

The repository is provided for:

- Portfolio viewing
- Technical demonstration
- Code review
- Recruitment and professional evaluation

Permission is not granted to use this repository as a template, starter project or commercial product.

## License

Copyright © 2026 Iris & Oak. All rights reserved.

This repository and its contents are publicly available for **portfolio, demonstration and code-review purposes only**.

Unless prior written permission is provided by Iris & Oak, the source code, website design, branding, written content and other original materials contained within this repository may not be:

- Copied or reproduced
- Modified or adapted
- Redistributed
- Republished
- Sublicensed
- Sold
- Used as a template or starter project
- Used in another commercial or non-commercial project

No open-source license is granted by the publication or public accessibility of this repository.

The **Iris & Oak** name, identity, visual design and associated branding remain proprietary.

For permission regarding use of any material contained within this repository, please contact Iris & Oak.

**All rights reserved.**

See [`LICENSE`](./LICENSE) for full terms.