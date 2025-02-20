import Link from "next/link"
import Header from "../Header/Header"

const Disclaimer = () => {
  const disclaimerList = [
    {
      title: "Limited License",
      desc1:
        "Subject to the terms and conditions set forth in these Terms of Use, Nautilus Shipping grants you a non-exclusive, non-transferable, limited right to access, use and display this site and the materials thereon. You agree not to interrupt or attempt to interrupt the operation of the site in any way.",
      desc2: "",
    },
    {
      title: "Third Party Content",
      desc1:
        "The Website makes information of third parties available (the “Third Party Content”). You acknowledge and agree that the Third Party Content is not created or endorsed by Nautilus Shipping nor are any products or services offered through it. The provision of Third Party Content is for general informational purposes only and does not constitute a recommendation or solicitation to purchase or sell any securities or shares or to make any other type of investment or investment decision. In addition, the Third Party Content is not intended to provide tax, legal or investment advice. You acknowledge that the Third Party Content provided to you is obtained from sources believed to be reliable, but that no guarantees are made by the Website or the providers of the Third Party Content as to its accuracy, completeness, timeliness. You agree not to hold the Website, any business offering products or services through the Website or any provider of Third Party Content liable for any investment decision or other transaction you may make based on your reliance on or use of such data, or any liability that may arise due to delays or interruptions in the delivery of the Third Party Content for any reason.",
      desc2:
        "By using any Third Party Content, you may leave this Website and be directed to an external website, or to a website maintained by an entity other than Nautilus Shipping. If you decide to visit any such site, you do so at your own risk and it is your responsibility to take all protective measures to guard against viruses or other destructive elements. Nautilus Shipping makes no warranty or representation regarding, and does not endorse, any linked Websites or the information appearing thereon or any of the products or services described thereon. Links do not imply that Nautilus Shipping or this Website sponsors, endorses, is affiliated or associated with, or is legally authorized to use any trademark, trade name, logo or copyright symbol displayed in or accessible through the links, or that any linked site is authorized to use any trademark, trade name, logo or copyright symbol of Nautilus Shipping or any of its affiliates or subsidiaries.",
    },
    {
      title: "No Warranties",
      desc1:
        "This site, the information and materials on the site, and any software made available on the site, are provided “as is” without any representation or warranty, express or implied, of any kind, including, but not limited to, warranties of merchantability, non infringement, or fitness for any particular purpose. There is no warranty of any kind, express or implied, regarding third party content. There is also no warranty that this site will be free of any computer viruses. Some jurisdictions do not allow for the exclusion of implied warranties, so the above exclusions may not apply to you.",
      desc2: "",
    },
    {
      title: "Limitation of Damages",
      desc1:
        "In no event shall Nautilus Shipping or any of its subsidiaries or affiliates be liable to any entity for any direct, indirect, special, consequential or other damages (including, without limitation, any lost profits, business interruption, loss of information or programs or other data on your information handling system) that are related to the use of, or the inability to use, the content, materials, and functions of the Website or any linked website, even if Nautilus Shipping Is expressly advised of the possibility of such damages.",
      desc2: "",
    },
    {
      title: "Disclaimer",
      desc1:
        "The Website may contain inaccuracies and typographical and clerical errors. Nautilus Shipping expressly disclaims any obligation to update this site or any of the materials on this site. Nautilus Shipping Does not warrant the accuracy or completeness of the materials or the reliability of any advice, opinion, statement or other information displayed or distributed through the site. You acknowledge that any reliance on any such opinion, advice, statement, memorandum, or information shall be at your sole risk. Nautilus Shipping Reserves the right, in its sole discretion, to correct any errors or omissions in any portion of the site. Nautilus Shipping May make any other changes to the site, the materials and the products, programs, services or prices (if any) described in the site at any time without notice.",
      desc2: "",
    },
    {
      title: "Indemnity",
      desc1:
        "You agree to indemnify and hold harmless Nautilus Shipping, its subsidiaries and affiliates from any claim, cost, expense, judgment or other loss relating to your use of this Website, including without limitation of the foregoing, any action you take which is in violation of the terms and conditions of these Terms of Use.",
      desc2: "",
    },
    {
      title: "Changes",
      desc1:
        "Nautilus Shipping reserves the right, at its sole discretion, to change, modify, add or remove any portion of these Terms of Use in whole or in part, at any time. Changes in these Terms of Use will be effective when notice of such change is posted. Your continued use of the Website after any changes to these Terms of Use are posted will be considered acceptance of those changes. Nautilus Shipping may terminate, change, suspend or discontinue any aspect of the Nautilus Shipping Website, including the availability of any features of the Site, at any time. Nautilus Shipping may also impose limits on certain features and services or restrict your access to parts or all of the Website without notice or liability. Nautilus Shipping may terminate the authorization, rights and license given above and, upon such termination, you shall immediately destroy all Materials.",
      desc2: "",
    },
    {
      title: "International Users and Choice of Law:",
      desc1:
        "This Site is controlled, operated and administered by Nautilus Shipping from its offices within India. Nautilus Shipping makes no representation that materials at this site are appropriate or available for use at other locations outside of India and access to them from territories where their contents are illegal is prohibited. You may not use the Website or export the Materials in violation of any applicable export laws and regulations. If you access this Site from a location outside of India, you are responsible for compliance with all local laws. These Terms of Use shall be governed by the laws of India, without giving effect to its conflict of laws provisions. You agree that the appropriate court in Bangalore, India, will have the exclusive jurisdiction to resolve all disputes arising under these Terms of Use, and you consent to personal jurisdiction in such forum. These Terms of Use constitutes the entire agreement between Nautilus Shipping and you with respect to your use of the Website. Any cause of action you may have with respect to your use of the Website must be commenced within one (1) year after the claim or cause of action arises. If for any reason a court of competent jurisdiction finds any provision of these Terms of Use or portion thereof, to be unenforceable, that provision shall be enforced to the maximum extent permissible so as to affect the intent of these Terms of Use, and the remainder of these Terms of Use shall continue in full force and effect.",
      desc2: "",
    },
  ]
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <div className="pt-24 md:pt-28 pb-7 md:pb-14">
        <div className="max-w-screen-lg mx-auto px-3 sm:px-0 flex flex-col gap-3">
          <h2 className="text-2xl sm:text-5xl md:text-5xl leading-tight md:leading-tight tracking-wide text-center">
            Disclaimer
          </h2>
          <p className="text-sm sm:text-base mt-3">
            The use of any product, service or feature (the “Materials”)
            available through the internet Website accessible at{" "}
            <Link
              href="https://www.nautilusshipping.com"
              target="_blank"
              className="text-secondary"
            >
              https://www.nautilusshipping.com
            </Link>{" "}
            by any user of the Website (“you” or “your”) shall be governed by
            the following Terms of Use:
          </p>
          <ul className="space-y-5 list-decimal px-10">
            <li>
              This Website is provided by Nautilus Shipping India Pvt. Ltd.
              (Nautilus Shipping), and may be used for informational purposes
              only. By using the site or downloading the Materials from the
              site, you agree to abide by the terms and conditions set forth in
              this notice. If you do not agree to abide by these terms and
              conditions please do not use the Website or download materials
              from the Website.
            </li>
            <li>
              This Site, including all Materials present (excluding any
              applicable third party materials) , is the property of Nautilus
              Shipping and is copyrighted and protected by worldwide copyright
              laws and treaty provisions. You agree to comply with all copyright
              laws worldwide in your use of this Website and to prevent any
              unauthorized copying of the Materials. Nautilus Shipping does not
              grant any express or implied rights under any patents, trademarks,
              copyrights or trade secret information.
            </li>
            <li>
              Nautilus Shipping has business relationships with thousands of
              customers, suppliers, governments, and others. For convenience and
              simplicity, words like joint venture, partnership, and partner are
              used to indicate business relationships involving common
              activities and interests, and those words may not indicate precise
              legal relationships.
            </li>
          </ul>

          <div className="space-y-3">
            {disclaimerList.map((item, index) => {
              return (
                <div key={index} className="space-y-2">
                  <h2 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm">{item.desc1}</p>
                  {item.desc2 && <p className="text-sm">{item.desc2}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Disclaimer
