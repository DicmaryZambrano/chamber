const memberSection = document.querySelector(".d-members");
const linkMembers = "https://dicmaryzambrano.github.io/wdd230/chamber/data/members.json";
const membershipFilter = document.getElementById("membership-filter");
const toggleStyleButton = document.getElementById("toggle-button");

membershipFilter.addEventListener("change", () => {
    const selectedMembership = membershipFilter.value;
    const members = document.querySelectorAll(".m-card");
    members.forEach(member => {
        if (selectedMembership === '' || member.getAttribute("id") === selectedMembership) {
            member.style.display = 'block';
        } else {
            member.style.display = 'none';
        }
    });
});

toggleStyleButton.addEventListener("click", () => {
    if (memberSection.classList.contains('grid')) {
        memberSection.classList.remove('grid');
        memberSection.classList.add('list');
        toggleStyleButton.classList.remove('grid');
        toggleStyleButton.classList.add('list');
    } else {
        memberSection.classList.remove('list');
        memberSection.classList.add("grid");
        toggleStyleButton.classList.remove('list');
        toggleStyleButton.classList.add("grid");
    }
});

function displayMemebers(members) {
    members.forEach(member => {
        let mName = member.name;
        let mAddress = member.address;
        let mPhone = member.phone;
        let mWebsite = member.website;
        let mLogo = member.logo;
        let mMembership = member.membership;
        let mDesc = member.desc;

        const mCard = document.createElement("div");
        const mCardMembership = document.createElement("div");
        const mCardLogo = document.createElement("img");
        const mCardContent = document.createElement("div");
        const mCardTitle = document.createElement("h3");
        const mCardAddress = document.createElement("p");
        const mCardPhone = document.createElement("p");
        const mCardWebsite = document.createElement("a");
        const mCardDesc = document.createElement("p");
        /*<img src="images/horse_logo.webp" alt="Valera Chamber of Commerce Logo" draggable="false" width="1" height="1" loading="lazy">*/

        mCard.setAttribute("class","m-card");
        mCard.setAttribute("id",`${mMembership.toLowerCase()}`)

        mCardMembership.textContent = mMembership;
        mCardMembership.setAttribute("class",`card-membership ${mMembership.toLowerCase()}`);



        mCardLogo.setAttribute("src",mLogo);
        mCardLogo.setAttribute("alt",`${mName} logo`);
        mCardLogo.setAttribute("class","card-img");
        mCardLogo.setAttribute("draggable","false");
        mCardLogo.setAttribute("width","1");
        mCardLogo.setAttribute("height","1");
        mCardLogo.setAttribute("loading","lazy");

        mCardTitle.textContent = mName;
        mCardAddress.textContent = mAddress;
        mCardPhone.textContent = mPhone;

        mCardWebsite.textContent = mWebsite;
        mCardWebsite.setAttribute("href","#")

        mCardDesc.textContent = mDesc;

        mCardContent.setAttribute("class","card-content");
        mCardContent.appendChild(mCardTitle);
        mCardContent.appendChild(mCardAddress);
        mCardContent.appendChild(mCardPhone);
        mCardContent.appendChild(mCardWebsite);
        mCardContent.appendChild(mCardDesc);


        mCard.appendChild(mCardMembership);
        mCard.appendChild(mCardLogo);
        mCard.appendChild(mCardContent);

        memberSection.appendChild(mCard);
    });
}

async function getMembers(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayMemebers(data.members);
    }
}

getMembers(linkMembers);
