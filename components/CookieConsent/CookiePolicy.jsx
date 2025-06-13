import Header from "../Header/Header"

const CookiePolicy = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />

      <section className="max-w-screen-lg mx-auto pt-24 md:pt-28 pb-7 md:pb-14 px-4">
        <h1 className="text-3xl font-bold mb-4">COOKIE POLICY</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated June 13, 2025</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device (computer,
              tablet, or mobile) when you visit a website. Cookies help us
              remember your preferences and improve your browsing experience.
            </p>
            <p className="mt-2">
              Cookies set by the website owner (in this case, Nautilus Shipping)
              are called "first-party cookies." Cookies set by parties other
              than the website owner are called "third-party cookies."
              Third-party cookies enable third-party features or functionality
              to be provided on or through the website (e.g., advertising,
              interactive content, and analytics). The parties that set these
              third-party cookies can recognize your computer both when it
              visits the website in question and also when it visits certain
              other websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Why do we use cookies?
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Ensure the website functions properly</li>
              <li>Understand how users interact with our content</li>
              <li>Improve performance and user experience</li>
              <li>
                Enable features like contact forms and job application
                submissions
              </li>
              <li>
                Provide analytics to help optimize our marketing and services
              </li>
            </ul>
            <p className="mt-2">
              We use first- and third-party cookies for several reasons. Some
              cookies are required for technical reasons in order for our
              Website to operate, and we refer to these as "essential" or
              "strictly necessary" cookies. Other cookies also enable us to
              track and target the interests of our users to enhance the
              experience on our Online Properties. Third parties serve cookies
              through our Website for advertising, analytics, and other
              purposes. This is described in more detail below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Types of Cookies We Use
            </h2>

            <div className="mt-4">
              <h3 className="font-semibold">a. Strictly Necessary Cookies</h3>
              <p>
                Essential for the website to function and cannot be turned off.
              </p>
              <p className="text-sm text-gray-600">
                Example: Remembering form inputs during a session
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">
                b. Performance & Analytics Cookies
              </h3>
              <p>Used to analyze how visitors use the website.</p>
              <p className="text-sm text-gray-600">
                Tools: Google Analytics, LinkedIn Insight Tag
              </p>
              <p className="text-sm text-gray-600">
                Data: Pages visited, time spent, referring URLs, clicks
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">c. Functionality Cookies</h3>
              <p>Enhance personalization and remember user preferences.</p>
              <p className="text-sm text-gray-600">
                Example: Remembering job filter preferences
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">
                d. Advertising & Tracking Cookies
              </h3>
              <p>Used for ad targeting and measuring ad performance.</p>
              <p className="text-sm text-gray-600">
                Tools: Google Ads, LinkedIn Ads (if in use)
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Third-Party Cookies</h2>
            <p>
              We may allow services like Google or LinkedIn to set cookies on
              your browser. These are subject to their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              How can I control cookies?
            </h2>
            <p>
              You have the right to decide whether to accept or reject cookies.
              You can exercise your cookie rights by setting your preferences in
              the Cookie Consent Manager. The Cookie Consent Manager allows you
              to select which categories of cookies you accept or reject.
              Essential cookies cannot be rejected as they are strictly
              necessary to provide you with services.
            </p>
            <p className="mt-2">
              The Cookie Consent Manager can be found in the notification banner
              and on our Website. If you choose to reject cookies, you may still
              use our Website though your access to some functionality and areas
              of our Website may be restricted. You may also set or amend your
              web browser controls to accept or refuse cookies.
            </p>
            <p className="mt-2">
              The specific types of first- and third-party cookies served
              through our Website and the purposes they perform are described in
              the table below (please note that the specific cookies served may
              vary depending on the specific Online Properties you visit):
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              How can I control cookies on my browser?
            </h2>
            <p>
              As the means by which you can refuse cookies through your web
              browser controls vary from browser to browser, you should visit
              your browser's help menu for more information. The following is
              information about how to manage cookies on the most popular
              browsers:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Chrome</li>
              <li>Internet Explorer</li>
              <li>Firefox</li>
              <li>Safari</li>
              <li>Edge</li>
              <li>Opera</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              How often will you update this Cookie Policy?
            </h2>
            <p>
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Please therefore
              revisit this Cookie Policy regularly to stay informed about our
              use of cookies and related technologies.
            </p>
            <p className="mt-2">
              The date at the top of this Cookie Policy indicates when it was
              last updated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Where can I get further information?
            </h2>
            <p>
              If you have any questions about our use of cookies or other
              technologies, please email us at <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@nautilusshipping.com"
                className="hover:text-secondary"
              >
                hello@nautilusshipping.com
              </a>{" "}
              or by post to:
            </p>

            <p className="">
              {/* <strong>Address:</strong> */}
              <br />
              Nautilus Shipping India Pvt. Ltd.
              <br />
              1st Floor, Maalavika Centre, 144/145,
              <br />
              Kodambakkam High Road, Nungambakkam,
              <br />
              Chennai - 600034
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+914446849999" className="hover:text-secondary">
                +91 44 4684 9999
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CookiePolicy
