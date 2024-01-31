const url = "https://dicmaryzambrano.github.io/wdd230/chamber/data/members.json";
const memberSection = document.querySelector(".spotlights");

async function getMembers(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        const memberFilter = data.members.filter(member => member.membership == "Gold" || member.membership == "Silver")
        const randomFigures = getRandomFigures(memberFilter, 4);

        displayMemebers(randomFigures);
    }

    function getRandomFigures(figures, count) {
      const shuffledFigures = figures.sort(() => 0.5 - Math.random());
      return shuffledFigures.slice(0, count);
    }
}

async function displayMemebers(members) {

      // Loop through each section and add images to it
      members.forEach(member => {
        let mName = member.name;
        let mAddress = member.address;
        let mPhone = member.phone;
        let mWebsite = member.website;
        let mLogo = member.logo;

        const mSlide = document.createElement("div");
        const mSlideLogo = document.createElement("img");
        const mSlideContent = document.createElement("div");
        const mSlideTitle = document.createElement("h3");
        const mSlideAddress = document.createElement("p");
        const mSlidePhone = document.createElement("p");
        const mSlideWebsite = document.createElement("a");

        mSlide.setAttribute("class","slide");


        mSlideLogo.setAttribute("src",mLogo);
        mSlideLogo.setAttribute("alt",`${mName} logo`);
        mSlideLogo.setAttribute("class","slide-img");
        mSlideLogo.setAttribute("draggable","false");
        mSlideLogo.setAttribute("width","1");
        mSlideLogo.setAttribute("height","1");
        mSlideLogo.setAttribute("loading","lazy");

        mSlideTitle.textContent = mName;
        mSlideAddress.textContent = mAddress;
        mSlidePhone.textContent = mPhone;

        mSlideWebsite.textContent = mWebsite;
        mSlideWebsite.setAttribute("href","#")


        mSlideContent.setAttribute("class","slide-content");
        mSlideContent.appendChild(mSlideTitle);
        mSlideContent.appendChild(mSlideAddress);
        mSlideContent.appendChild(mSlidePhone);
        mSlideContent.appendChild(mSlideWebsite);


        mSlide.appendChild(mSlideLogo);
        mSlide.appendChild(mSlideContent);

        memberSection.appendChild(mSlide);
    });
  }

getMembers(url)