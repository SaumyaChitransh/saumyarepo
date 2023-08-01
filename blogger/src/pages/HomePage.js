import NavBar from "../NavBar";
const HomePage = () => {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <h1>Welcome to my Experience Cloud blog!</h1>
      <img
        src="https://static.8awake.com/uploads/2021/11/adobe-experience-cloud-marketing-cloud-600x265.png"
        width="600"
        height="250"
        alt="exp cloud"
      />

      <p>
        Adobe Experience Cloud includes a set of analytics, social, advertising,
        media optimization, targeting, Web experience management, journey
        orchestration and content management products and hosted on Microsoft
        Azure. The Adobe Marketing Cloud collection was introduced to the public
        in October 2012 as Adobe began retiring the Omniture name it acquired in
        October 2009. Products of the defunct company were then integrated
        step-by-step into the new Cloud service which includes the following
        eight applications: Adobe Analytics, Adobe Target, Adobe Social, Adobe
        Experience Manager, Adobe Media Optimizer, Adobe Campaign (Classic and
        Standard), Audience Manager and Primetime. In November 2013, Adobe
        Systems introduced mobile features to its Marketing Cloud, making
        smartphones and other mobile devices new targets for analytics.
      </p>
      <p>
        On September 15, 2009, Omniture, Inc. and Adobe Systems announced that
        Adobe would be acquiring Omniture, an online marketing and web analytics
        business unit in Orem, Utah. The deal worth $1.8 billion, was completed
        on October 23, 2009, and is now joined by other Adobe acquisitions such
        as Day Software and Efficient Frontier, as the main components of
        Adobe's Digital Marketing Business Unit. Around 2012, Adobe withdrew the
        Omniture brand while its products were being integrated into the Adobe
        Marketing Cloud. In 2013 Adobe acquired Satellite TMS from Search
        Discovery and renamed it Adobe Dynamic Tag Management (Adobe DTM) to
        replace their Adobe Tag Manager. Adobe Launch came out in 2018. Launch
        the next-generation tag management system. The system, designed by
        Adobe, was released in 2018. It uses the latest technologies and on top
        of this, is designed for the needs of modern digital marketing. You
        don’t have the excuse of cost anymore – Launch is free, and you should
        have a valid contract with Adobe only.
      </p>
      <p>
        On May 21, 2018, Adobe announced the acquisition of Magento for $1.68
        billion.The addition of the Magento Commerce will enable commerce
        features to be integrated into the Adobe Experience Cloud. In the same
        year, on September 20, 2018, Adobe acquired the marketing automation
        company Marketo. The acquisition is expected to close in Q4 2018. In
        2021 Adobe Experience Platform Launch will be integrated into Adobe
        Experience Platform as a suite of data collection technologies.
      </p>
    </>
  );
};

export default HomePage;
