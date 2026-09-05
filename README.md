# Iris & Oak

A production-focused freelance software development website built for **Iris & Oak**.

Iris & Oak designs and develops thoughtful websites, web applications and digital tools for small businesses, founders and organisations.

> Thoughtfully engineered software, built to last.

**Visit the production website at [Iris & Oak](https://www.irisoak.dev).**

## Overview

The Iris & Oak website is a production Next.js application designed around a clear client journey:

1. Explore the available services.
2. Review selected work and case studies.
3. Choose the service that best matches the project.
4. Submit a structured project enquiry.

The website prioritises responsive design, accessibility, clear communication and a calm experience across desktop and mobile devices.

This repository is publicly available for portfolio, demonstration and code-review purposes. Iris & Oak and the source code within this repository remain proprietary.

## Features

- Responsive desktop and mobile experience
- Dedicated Services, Work, Contact and Privacy pages
- Expandable service and pricing information
- Individual project case studies
- Four-step client enquiry journey
- Service preselection through URL parameters
- Service-specific project questions
- Review and amend workflow
- Required-field and email validation
- Privacy consent handling
- Transactional enquiry emails
- Submission error and success states
- Separate custom-project enquiry flow
- Mobile navigation with direct page routing

## Services

The website presents four primary service categories.

### Launch

Focused websites for businesses establishing a professional online presence.

Available packages include:

- One Page
- Up to 5 Pages

### Refresh

Considered redesign and improvement of an existing website.

### Care

Ongoing website maintenance, monitoring and technical support.

### Custom Project

Tailored applications, integrations and more complex development work that falls outside the standard service packages.

Current package details and pricing are available on the [Iris & Oak Services page](https://www.irisoak.dev/services).

## Selected Work

The website currently presents two featured projects.

### Kawari Company

A consultancy website in development for a specialist safeguarding, regulation and independent-review practice.

[View the Kawari Company case study](https://www.irisoak.dev/work/kawari-company).

### PartsPilot

A full-stack automotive inventory intelligence platform designed to manage parts, monitor stock levels and support clearer data-driven decisions.

[View the PartsPilot case study](https://www.irisoak.dev/work/partspilot).

Each project has a dedicated case-study page describing its purpose, design direction and development approach.

## Tech Stack

### Frontend

- Next.js 16
- React
- TypeScript
- CSS

### Backend and Integrations

- Next.js Route Handlers
- Resend transactional email API
- Server-side environment configuration

### Development

- Node.js
- Git
- GitHub

## Application Routes

```text
/
├── /services
├── /work
│   ├── /work/kawari-company
│   └── /work/partspilot
├── /contact
├── /privacy
└── /api/enquiries
```

Service enquiry links can preselect the relevant option on the Contact page:

```text
/contact?service=launch
/contact?service=refresh
/contact?service=care
/contact?service=custom
```

Only recognised service values are accepted. A general visit to `/contact` opens the enquiry journey without preselecting a service.

## Client Enquiry Flow

The main enquiry experience uses a four-step client journey:

1. **About you**
2. **Your needs**
3. **Your project**
4. **Review and send**

Project questions adapt to the service selected by the client, allowing Iris & Oak to collect relevant project information without presenting unnecessary technical questions.

Before submission, clients can review their information and amend individual sections.

Changing the selected service clears the previous project answers, preventing information from an earlier service choice from appearing in the final enquiry.

The enquiry flow also includes:

- Required-field validation
- Email validation
- Optional project questions
- Consent confirmation
- Service-specific project questions
- Clear review summaries
- Direct section amendment
- Submission error handling
- Transactional email integration
- Successful submission confirmation
- Context-aware return navigation
- Form reset for subsequent enquiries

A separate streamlined enquiry experience is provided for custom projects.

## Responsive Design

The interface has been designed for desktop and mobile use.

The mobile experience includes:

- Dedicated mobile navigation
- Direct Work, Services and Contact routes
- Responsive typography and spacing
- Mobile-friendly enquiry forms
- Responsive service layouts
- Touch-friendly controls
- Adapted review and submission layouts

## Email Integration

Client enquiries are processed through a server-side API route and integrated with **Resend** for transactional email delivery.

Sensitive credentials and API keys are managed through environment variables and are not exposed through client-side code.

The complete enquiry workflow has been verified in production, including successful email delivery.

## Testing

Version 1.1.0 has been tested primarily through manual QA across its main user journeys and responsive layouts.

The production build successfully completes:

- Next.js compilation
- TypeScript validation
- Page-data collection
- Static-page generation
- Route optimisation

Current manual testing covers:

- Desktop and mobile navigation
- Dedicated application routes
- Responsive layouts
- Service interactions
- Service URL preselection
- Required-field validation
- Email validation
- Multi-step enquiry navigation
- Optional project questions
- Review and amend functionality
- Project-field reset when changing services
- Consent validation
- Enquiry submission
- Production email delivery
- Submission success states
- Return navigation
- Desktop and mobile layouts

Automated testing is planned as part of a future release.

## Project Structure

```text
irisoak-next/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── contact/
│   │   ├── privacy/
│   │   ├── services/
│   │   └── work/
│   └── components/
│       ├── home/
│       └── layout/
├── .gitignore
├── .nvmrc
├── LICENSE.md
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Project Status

**v1.1.0 — Live**

Iris & Oak v1.1.0 is deployed and available at [www.irisoak.dev](https://www.irisoak.dev).

The release includes:

- Dedicated Services, Work, Contact and Privacy routes
- Expanded service and pricing presentation
- Individual project case studies
- Service-specific contact links
- Improved enquiry review and amend behaviour
- Project-answer reset when changing services
- Production transactional email delivery
- Updated desktop and mobile navigation
- Responsive layout improvements

Future improvements will be developed as focused releases shaped by real business and client requirements.

## Roadmap

Potential post-v1.1 improvements include:

- Additional case studies and client work
- Automated component and end-to-end testing
- Further accessibility testing
- Enquiry workflow enhancements
- Client account and project portal
- Proposal and invoicing integrations
- Business administration and CRM tooling

The roadmap is subject to change as Iris & Oak develops and real client requirements emerge.

## Security

Sensitive credentials and production configuration are managed using environment variables and are not committed to source control.

The public repository does not contain:

- Production API keys
- Authentication credentials
- Client information
- Submitted enquiry data
- Other production secrets

Any production-specific configuration that should not be publicly accessible is maintained separately from the public source code.

## Repository Usage

This repository is public so prospective clients, recruiters and other interested parties can review the development work behind Iris & Oak.

Public visibility does **not** mean that the project is open source.

The repository is provided for:

- Portfolio viewing
- Technical demonstration
- Code review
- Recruitment and professional evaluation

Permission is not granted to use this repository as a template, starter project or commercial product.

## Licence

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

No open-source licence is granted by the publication or public accessibility of this repository.

The **Iris & Oak** name, identity, visual design and associated branding remain proprietary.

For permission regarding use of any material contained within this repository, please contact Iris & Oak.

**All rights reserved.**

See [`LICENSE.md`](./LICENSE.md) for the full terms.