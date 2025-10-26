// src/components/Sections/Contact/index.tsx

import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          {headerText && <h2 className="text-2xl font-bold text-white">{headerText}</h2>}
          <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
        </div>
        <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
          {items.map(({type, text, href}) => {
            const {Icon, srLabel} = ContactValueMap[type];
            return (
              <div key={srLabel}>
                <dt className="sr-only">{srLabel}</dt>
                <dd className="flex items-center">
                  <a
                    className="-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-neutral-100" />
                    <span className="ml-3 text-base">{text}</span>
                  </a>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;