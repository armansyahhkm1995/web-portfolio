import SocialLinks from "./SocialLinks";

type FooterContactProps = {
  contact: {
    address: string;
    googleMapsUrl: string;
    email: string;
    phone: string;
  };

  socials: ReadonlyArray<{
    name: string;
    href: string;
    icon: string;
  }>;
};

export default function FooterContact({
  contact,
  socials,
}: FooterContactProps) {
  return (
    <div>
      <h3 className="display-xs mb-6 text-white">Contact</h3>

      <dl className="space-y-6">
        <div>
          <dt className="body-sm font-semibold text-white">Address</dt>

          <dd className="mt-2">
            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="body-md text-muted-foreground hover:text-primary transition-colors"
            >
              {contact.address}
            </a>
          </dd>
        </div>

        <div>
          <dt className="body-sm font-semibold text-white">Email</dt>

          <dd className="body-md mt-2 text-muted-foreground">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
        </div>

        <div>
          <dt className="body-sm font-semibold text-white">Phone</dt>

          <dd className="body-md mt-2 text-muted-foreground">
            <a href={`mailto:${contact.phone}`}>{contact.phone}</a>
          </dd>
        </div>
      </dl>

      <SocialLinks socials={socials} />
    </div>
  );
}
