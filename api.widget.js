class ApiWidget {
    constructor(position = "bottom-right") {
        this.position = this.getPosition(position);
        this.initialize();
    }

    position = "";
    apiWidgetContainer = null;

    getPosition(position) {
        const [vertical, horizontal] = position.split("-");
        return { [vertical]: "30px", [horizontal]: "30px" };
    }

    async initialize() {
        const container = document.createElement("div");
        container.style.position = "fixed";
        Object.keys(this.position).forEach(
            (key) => (container.style[key] = this.position[key])
        );
        document.body.appendChild(container);

        const apiWidgetButton = document.createElement("button");

        apiWidgetButton.id = "api-widget-button";
        apiWidgetButton.innerText = "Apply for Mortgage";

        apiWidgetButton.style.cursor = "pointer";
        apiWidgetButton.style.backgroundColor = "#399af2";
        apiWidgetButton.style.color = "rgba(255, 255, 255, 0.85)";
        apiWidgetButton.style.border = "1px solid #399af2";
        apiWidgetButton.style.display = "inline-block";
        apiWidgetButton.style.whiteSpace = "nowrap";
        apiWidgetButton.style.userSelect = "none";
        apiWidgetButton.style.padding = "25px 50px";
        apiWidgetButton.style.fontSize = "1rem";
        apiWidgetButton.style.borderRadius = ".25rem";
        apiWidgetButton.style.transition = "all .2s ease";
        apiWidgetButton.style.height = "auto";
        apiWidgetButton.style.verticalAlign = "middle";
        apiWidgetButton.style.fontWeight = "500";
        apiWidgetButton.style.textTransform = "none";
        apiWidgetButton.style.margin = "0";
        apiWidgetButton.style.fontFamily = "inherit";
        apiWidgetButton.style.overflow = "visible";
        apiWidgetButton.style.textAlign = "center";
        apiWidgetButton.style.outline = "none";
        apiWidgetButton.style.boxShadow = "0 5px 10px rgba(57, 154, 242, .4)";
        apiWidgetButton.style.fontFamily = "Poppins, sans-serif";

        apiWidgetButton.addEventListener("click", () => {
            this.apiWidgetContainer.style.transform = "scale(1)";
            this.apiWidgetContainer.style.transition = "all .3s ease-out";
            apiWidgetButton.style.transform = "scale(0)";
            apiWidgetButton.style.transition = "all .3s ease-out";
        });

        this.apiWidgetContainer = this.createApiWidget();

        this.apiWidgetContainer.style.transform = "scale(0)";
        this.apiWidgetContainer.style.width = "380px";
        this.apiWidgetContainer.style.right = "-15px";
        this.apiWidgetContainer.style.bottom = "30px";
        this.apiWidgetContainer.style.position = "absolute";
        this.apiWidgetContainer.style.transition = "max-height .2s ease";
        this.apiWidgetContainer.style.borderRadius = "10px";

        container.appendChild(this.apiWidgetContainer);
        container.appendChild(apiWidgetButton);
    }

    createApiWidget() {
        var cardContainerDiv = document.createElement("div");
        var cardDiv = document.createElement("div");
        var cardFrontDiv = document.createElement("div");
        var cardFrontHeadertDiv = document.createElement("div");
        var cardFrontHeader = document.createElement("h5");
        var cardFrontCloseButton = document.createElement("button");
        var cardFrontCloseIcon = document.createElement("span");
        var cardFrontBodyDiv = document.createElement("div");
        var cardFrontBodyHeader = document.createElement("h5");
        var cardFrontBodyParagraph = document.createElement("p");
        var applyButtonDiv = document.createElement("div");
        var applyButton = document.createElement("button");
        var cardFrontFootertDiv = document.createElement("div");
        var cardFrontFooterLink = document.createElement("a");
        var cardFrontFooterSpan = document.createElement("span");
        var cardFrontFooterLogoImg = document.createElement("img");
        var cardBackDiv = document.createElement("div");
        var cardBackHeadertDiv = document.createElement("div");
        var cardBackHeader = document.createElement("h5");
        var cardBackCloseButton = document.createElement("button");
        var cardBackCloseIcon = document.createElement("span");
        var cardBackBodyDiv = document.createElement("div");
        var cardBackForm = document.createElement("form");
        var row1Div = document.createElement("div");
        var row1Col1Div = document.createElement("div");
        var row1Col1FormGroupDiv = document.createElement("div");
        var firstNameInput = document.createElement("input");
        var row2Div = document.createElement("div");
        var row2Col1Div = document.createElement("div");
        var row2Col1FormGroupDiv = document.createElement("div");
        var lastNameInput = document.createElement("input");
        var row3Div = document.createElement("div");
        var row3Col1Div = document.createElement("div");
        var row3Col1FormGroupDiv = document.createElement("div");
        var emailInput = document.createElement("input");
        var row4Div = document.createElement("div");
        var row4Col1Div = document.createElement("div");
        var row4Col1FormGroupDiv = document.createElement("div");
        var applicationTypeSelect = document.createElement("select");
        var applicationTypeOption1 = document.createElement("option");
        var applicationTypeOption2 = document.createElement("option");
        var applicationTypeOption3 = document.createElement("option");
        var row5Div = document.createElement("div");
        var row5Col1Div = document.createElement("div");
        var row5Col1FormGroupDiv = document.createElement("div");
        var requestedLoanAmountInput = document.createElement("input");
        var rowConsentDiv = document.createElement("div");
        var rowConsentColDiv = document.createElement("div");
        var consentDiv = document.createElement("div");
        var consentCheckbox = document.createElement("input");
        var consentLabel = document.createElement("label");
        var consentLabelText = document.createElement("span");
        var consentLabelLink = document.createElement("a");
        var rowButtonsDiv = document.createElement("div");
        var rowButtonsColDiv = document.createElement("div");
        var createApplicationButton = document.createElement("button");
        var cancelButton = document.createElement("button");
        var loadingGifDiv = document.createElement("div");
        var loadingGifImg = document.createElement("img");
        var resultContainer = document.createElement("p");
        var cardBackFootertDiv = document.createElement("div");
        var cardBackFooterLink = document.createElement("a");
        var cardBackFooterSpan = document.createElement("span");
        var cardBackFooterLogoImg = document.createElement("img");

        cardContainerDiv.appendChild(cardDiv);
        cardDiv.appendChild(cardFrontDiv);
        cardFrontDiv.appendChild(cardFrontHeadertDiv);
        cardFrontHeadertDiv.appendChild(cardFrontHeader);
        cardFrontHeadertDiv.appendChild(cardFrontCloseButton);
        cardFrontCloseButton.appendChild(cardFrontCloseIcon);
        cardFrontDiv.appendChild(cardFrontBodyDiv);
        cardFrontBodyDiv.appendChild(cardFrontBodyHeader);
        cardFrontBodyDiv.appendChild(cardFrontBodyParagraph);
        cardFrontBodyDiv.appendChild(applyButtonDiv);
        applyButtonDiv.appendChild(applyButton);
        cardFrontDiv.appendChild(cardFrontFootertDiv);
        cardFrontFootertDiv.appendChild(cardFrontFooterLink);
        cardFrontFooterLink.appendChild(cardFrontFooterSpan);
        cardFrontFooterLink.appendChild(cardFrontFooterLogoImg);
        cardDiv.appendChild(cardBackDiv);
        cardBackDiv.appendChild(cardBackHeadertDiv);
        cardBackHeadertDiv.appendChild(cardBackHeader);
        cardBackHeadertDiv.appendChild(cardBackCloseButton);
        cardBackCloseButton.appendChild(cardBackCloseIcon);
        cardBackDiv.appendChild(cardBackBodyDiv);
        cardBackBodyDiv.appendChild(cardBackForm);
        cardBackForm.appendChild(row1Div);
        row1Div.appendChild(row1Col1Div);
        row1Col1Div.appendChild(row1Col1FormGroupDiv);
        row1Col1FormGroupDiv.appendChild(firstNameInput);
        cardBackForm.appendChild(row2Div);
        row2Div.appendChild(row2Col1Div);
        row2Col1Div.appendChild(row2Col1FormGroupDiv);
        row2Col1FormGroupDiv.appendChild(lastNameInput);
        cardBackForm.appendChild(row3Div);
        row3Div.appendChild(row3Col1Div);
        row3Col1Div.appendChild(row3Col1FormGroupDiv);
        row3Col1FormGroupDiv.appendChild(emailInput);
        cardBackForm.appendChild(row4Div);
        row4Div.appendChild(row4Col1Div);
        row4Col1Div.appendChild(row4Col1FormGroupDiv);
        row4Col1FormGroupDiv.appendChild(applicationTypeSelect);
        applicationTypeSelect.appendChild(applicationTypeOption1);
        applicationTypeSelect.appendChild(applicationTypeOption2);
        applicationTypeSelect.appendChild(applicationTypeOption3);
        cardBackForm.appendChild(row5Div);
        row5Div.appendChild(row5Col1Div);
        row5Col1Div.appendChild(row5Col1FormGroupDiv);
        row5Col1FormGroupDiv.appendChild(requestedLoanAmountInput);
        cardBackForm.appendChild(rowConsentDiv);
        rowConsentDiv.appendChild(rowConsentColDiv);
        rowConsentColDiv.appendChild(consentDiv);
        consentDiv.appendChild(consentCheckbox);
        consentDiv.appendChild(consentLabel);
        consentLabel.appendChild(consentLabelText);
        consentLabel.appendChild(consentLabelLink);
        cardBackForm.appendChild(rowButtonsDiv);
        rowButtonsDiv.appendChild(rowButtonsColDiv);
        rowButtonsColDiv.appendChild(createApplicationButton);
        rowButtonsColDiv.appendChild(cancelButton);
        cardBackBodyDiv.appendChild(loadingGifDiv);
        loadingGifDiv.appendChild(loadingGifImg);
        cardBackBodyDiv.appendChild(resultContainer);
        cardBackDiv.appendChild(cardBackFootertDiv);
        cardBackFootertDiv.appendChild(cardBackFooterLink);
        cardBackFooterLink.appendChild(cardBackFooterSpan);
        cardBackFooterLink.appendChild(cardBackFooterLogoImg);

        cardContainerDiv.id = "api-widget-container";
        cardContainerDiv.style.width = "100%";
        cardContainerDiv.style.height = "480px";
        cardContainerDiv.style.borderRadius = "4px";
        cardContainerDiv.style.perspective = "800px";
        cardContainerDiv.style.marginBottom = "50px";
        cardContainerDiv.style.fontFamily = "Poppins, sans-serif";

        cardDiv.id = "api-widget-card";
        cardDiv.style.boxShadow = "0 10px 40px 0 rgba(18, 106, 211, .07), 0 2px 9px 0 rgba(18, 106, 211, .06)";
        cardDiv.style.border = "none";
        cardDiv.style.marginBottom = "1.875rem";
        cardDiv.style.display = "flex";
        cardDiv.style.flexDirection = "column";
        cardDiv.style.minWidth = "0";
        cardDiv.style.backgroundColor = "#fff";
        cardDiv.style.backgroundClip = "border-box";
        cardDiv.style.borderRadius = ".25rem";
        cardDiv.style.transition = "transform .5s, -webkit-transform .5s";
        cardDiv.style.transformStyle = "preserve-3d";
        cardDiv.style.position = "relative";

        cardFrontDiv.style.zIndex = "2";
        cardFrontDiv.style.border = "2px solid #399af2";
        cardFrontDiv.style.background = "#fff";
        cardFrontDiv.style.boxShadow = "0 10px 40px 0 rgba(18, 106, 211, .07), 0 2px 9px 0 rgba(18, 106, 211, .06)";
        cardFrontDiv.style.backfaceVisibility = "hidden";
        cardFrontDiv.style.position = "absolute";
        cardFrontDiv.style.top = "0";
        cardFrontDiv.style.left = "0";
        cardFrontDiv.style.width = "100%";
        cardFrontDiv.style.borderRadius = "4px";

        cardFrontHeadertDiv.style.padding = "15px 20px";
        cardFrontHeadertDiv.style.position = "relative";
        cardFrontHeadertDiv.style.borderBottom = "1px solid rgba(0, 0, 0, .1)";
        cardFrontHeadertDiv.style.background = "#399af2";
        cardFrontHeadertDiv.style.minHeight = "45px";
        cardFrontHeadertDiv.style.marginBottom = "0";
        cardFrontHeadertDiv.style.boxSizing = "border-box";

        cardFrontHeader.style.textAlign = "left";
        cardFrontHeader.style.color = "#fff";
        cardFrontHeader.style.fontSize = "1rem";
        cardFrontHeader.style.fontWeight = "400";
        cardFrontHeader.style.letterSpacing = ".02em";
        cardFrontHeader.style.fontFamily = "Poppins, sans-serif";
        cardFrontHeader.style.marginBottom = ".5rem";
        cardFrontHeader.style.lineHeight = "1.2";
        cardFrontHeader.style.marginTop = "0";
        cardFrontHeader.innerText = "Shop Rates, Get Approved";

        cardFrontCloseButton.style.position = "absolute";
        cardFrontCloseButton.style.top = "7px";
        cardFrontCloseButton.style.right = "20px";
        cardFrontCloseButton.style.border = "none";
        cardFrontCloseButton.style.backgroundColor = "#399af2"
        cardFrontCloseButton.style.width = "41px";
        cardFrontCloseButton.style.height = "41px";
        cardFrontCloseButton.style.borderRadius = "50%";
        cardFrontCloseButton.style.cursor = "pointer";
        cardFrontCloseButton.style.outline = "none";

        cardFrontCloseButton.addEventListener("mouseover", () => {
            cardFrontCloseButton.style.backgroundColor = "#5babf4"
        });

        cardFrontCloseButton.addEventListener("mouseout", () => {
            cardFrontCloseButton.style.backgroundColor = "#399af2"
        });

        cardFrontCloseButton.addEventListener("click", () => {
            cardBackForm.reset();
            cardDiv.style.transform = "none";
            document.getElementById('api-widget-container').style.transform = "scale(0)";
            document.getElementById('api-widget-container').style.transition = "all .3s ease-out";
            document.getElementById('api-widget-button').style.transform = "scale(1)";
            document.getElementById('api-widget-button').style.transition = "all .3s ease-out";
        });

        cardFrontCloseIcon.style.cursor = "pointer";
        cardFrontCloseIcon.style.width = "60%";
        cardFrontCloseIcon.style.position = "absolute";
        cardFrontCloseIcon.style.top = "14px";
        cardFrontCloseIcon.style.left = "14px";
        cardFrontCloseIcon.style.transition = "transform .3s ease";
        cardFrontCloseIcon.innerHTML = `<svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="11" x2="11" y2="1" stroke="#fff" stroke-width="2"/>
        <line x1="1" y1="1" x2="11" y2="11" stroke="#fff" stroke-width="2"/></svg>`;

        cardFrontBodyDiv.style.padding = "1.25rem";
        cardFrontBodyDiv.style.height = "400px";

        cardFrontBodyHeader.style.textAlign = "left";
        cardFrontBodyHeader.style.padding = "10px";
        cardFrontBodyHeader.style.color = "#4d5a68";
        cardFrontBodyHeader.style.fontSize = "1rem";
        cardFrontBodyHeader.style.fontWeight = "500";
        cardFrontBodyHeader.style.letterSpacing = ".02em";
        cardFrontBodyHeader.style.fontFamily = "Poppins, sans-serif";
        cardFrontBodyHeader.style.marginBottom = ".5rem";
        cardFrontBodyHeader.style.lineHeight = "1.2";
        cardFrontBodyHeader.style.marginTop = "0";
        cardFrontBodyHeader.innerText = "Your AI-Powered Broker";

        cardFrontBodyParagraph.style.padding = "10px";
        cardFrontBodyParagraph.style.marginTop = "10px";
        cardFrontBodyParagraph.style.textAlign = "justify";
        cardFrontBodyParagraph.style.color = "#617182";
        cardFrontBodyParagraph.style.lineHeight = "1.7";
        cardFrontBodyParagraph.style.fontSize = ".875rem";
        cardFrontBodyParagraph.style.marginBottom = "1rem";
        cardFrontBodyParagraph.innerText = "Secure the best mortgage rates effortlessly with our AI-powered broker, ensuring personalized loan solutions tailored to your needs at bottom rates.";

        applyButtonDiv.style.textAlign = "center";
        applyButtonDiv.style.padding = "25px 25px";

        applyButton.innerText = "Apply Today";
        applyButton.style.cursor = "pointer";
        applyButton.style.backgroundColor = "#fff";
        applyButton.style.color = "#399af2";
        applyButton.style.border = "1px solid #399af2";
        applyButton.style.display = "inline-block";
        applyButton.style.whiteSpace = "nowrap";
        applyButton.style.userSelect = "none";
        applyButton.style.padding = "25px 50px";
        applyButton.style.fontSize = "1rem";
        applyButton.style.lineHeight = ".2";
        applyButton.style.borderRadius = ".25rem";
        applyButton.style.transition = "all .2s ease";
        applyButton.style.height = "auto";
        applyButton.style.verticalAlign = "middle";
        applyButton.style.fontWeight = "300";
        applyButton.style.textTransform = "none";
        applyButton.style.margin = "0";
        applyButton.style.fontFamily = "inherit";
        applyButton.style.overflow = "visible";
        applyButton.style.textAlign = "center";
        applyButton.style.outline = "none";

        applyButton.addEventListener("mouseover", () => {
            applyButton.style.color = "#fff";
            applyButton.style.backgroundColor = "#399af2";
            applyButton.style.border = "1px solid #2b93f1";
            applyButton.style.boxShadow = "0 5px 10px rgba(57, 154, 242, .4)";
            applyButton.style.textDecoration = "none";
        });

        applyButton.addEventListener("mouseout", () => {
            applyButton.style.color = "#399af2";
            applyButton.style.backgroundColor = "#fff";
            applyButton.style.border = "1px solid #399af2";
            applyButton.style.boxShadow = "none";
            applyButton.style.textDecoration = "none";
        });

        applyButton.addEventListener("click", () => {
            cardDiv.style.transform = "rotateY(180deg)";
        });

        cardFrontFootertDiv.style.padding = "1rem 1.25rem";
        cardFrontFootertDiv.style.fontSize = "1.1rem";
        cardFrontFootertDiv.style.fontWeight = "400";
        cardFrontFootertDiv.style.borderTop = "1px solid rgba(234, 243, 253, .7)";
        cardFrontFootertDiv.lastChild.style.borderRadius = "0 0 calc(.25rem - 1px) calc(.25rem - 1px)";
        cardFrontFootertDiv.style.textAlign = "center";

        cardFrontFooterLink.href = "https://www.lendcore.ca/";
        cardFrontFooterLink.target = "_blank";
        cardFrontFooterLink.style.textDecoration = "none";

        cardFrontFooterLink.addEventListener("mouseover", () => {
            cardFrontFooterSpan.style.color = "rgb(20, 27, 77)";
            cardFrontFooterLink.style.textDecoration = "none";
        });

        cardFrontFooterLink.addEventListener("mouseout", () => {
            cardFrontFooterSpan.style.color = "#839bb3";
            cardFrontFooterLink.style.textDecoration = "none";
        });

        cardFrontFooterSpan.style.color = "#839bb3";
        cardFrontFooterSpan.style.marginRight = "5px";
        cardFrontFooterSpan.style.fontSize = ".7rem";
        cardFrontFooterSpan.innerText = "Powered by ";

        cardFrontFooterLogoImg.src = "https://framerusercontent.com/images/jyhqQ1Le5gDeDRcArc9sfUfo8.png";
        cardFrontFooterLogoImg.width = "80";
        cardFrontFooterLogoImg.height = "80";
        cardFrontFooterLogoImg.alt = "Lendcore";
        cardFrontFooterLogoImg.style.maxWidth = "100%";
        cardFrontFooterLogoImg.style.height = "auto";
        cardFrontFooterLogoImg.style.verticalAlign = "middle";
        cardFrontFooterLogoImg.style.borderStyle = "none";
        cardFrontFooterLogoImg.style.boxSizing = "border-box";

        cardBackDiv.style.transform = "rotateY(180deg)";
        cardBackDiv.style.zIndex = "3";
        cardBackDiv.style.border = "2px solid #399af2";
        cardBackDiv.style.background = "#fff";
        cardBackDiv.style.boxShadow = "0 10px 40px 0 rgba(18, 106, 211, .07), 0 2px 9px 0 rgba(18, 106, 211, .06)";
        cardBackDiv.style.backfaceVisibility = "hidden";
        cardBackDiv.style.position = "absolute";
        cardBackDiv.style.top = "0";
        cardBackDiv.style.left = "0";
        cardBackDiv.style.width = "100%";
        cardBackDiv.style.borderRadius = "4px";

        cardBackHeadertDiv.style.padding = "15px 20px";
        cardBackHeadertDiv.style.position = "relative";
        cardBackHeadertDiv.style.borderBottom = "1px solid rgba(0, 0, 0, .1)";
        cardBackHeadertDiv.style.background = "#399af2";
        cardBackHeadertDiv.style.minHeight = "45px";
        cardBackHeadertDiv.style.marginBottom = "0";
        cardBackHeadertDiv.style.boxSizing = "border-box";

        cardBackHeader.style.textAlign = "left";
        cardBackHeader.style.color = "#fff";
        cardBackHeader.style.fontSize = "1rem";
        cardBackHeader.style.fontWeight = "400";
        cardBackHeader.style.letterSpacing = ".02em";
        cardBackHeader.style.fontFamily = "Poppins, sans-serif";
        cardBackHeader.style.marginBottom = ".5rem";
        cardBackHeader.style.lineHeight = "1.2";
        cardBackHeader.style.marginTop = "0";
        cardBackHeader.innerText = "Shop Rates, Get Approved";

        cardBackCloseButton.style.position = "absolute";
        cardBackCloseButton.style.top = "7px";
        cardBackCloseButton.style.right = "20px";
        cardBackCloseButton.style.border = "none";
        cardBackCloseButton.style.backgroundColor = "#399af2"
        cardBackCloseButton.style.width = "41px";
        cardBackCloseButton.style.height = "41px";
        cardBackCloseButton.style.borderRadius = "50%";
        cardBackCloseButton.style.cursor = "pointer";
        cardBackCloseButton.style.outline = "none";

        cardBackCloseButton.addEventListener("mouseover", () => {
            cardBackCloseButton.style.backgroundColor = "#5babf4"
        });

        cardBackCloseButton.addEventListener("mouseout", () => {
            cardBackCloseButton.style.backgroundColor = "#399af2"
        });

        cardBackCloseButton.addEventListener("click", () => {
            cardBackForm.reset();
            cardDiv.style.transform = "none";
            document.getElementById('api-widget-container').style.transform = "scale(0)";
            document.getElementById('api-widget-container').style.transition = "all .3s ease-out";
            document.getElementById('api-widget-button').style.transform = "scale(1)";
            document.getElementById('api-widget-button').style.transition = "all .3s ease-out";
        });

        cardBackCloseIcon.style.cursor = "pointer";
        cardBackCloseIcon.style.width = "60%";
        cardBackCloseIcon.style.position = "absolute";
        cardBackCloseIcon.style.top = "14px";
        cardBackCloseIcon.style.left = "14px";
        cardBackCloseIcon.style.transition = "transform .3s ease";
        cardBackCloseIcon.innerHTML = `<svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="11" x2="11" y2="1" stroke="#fff" stroke-width="2"/>
        <line x1="1" y1="1" x2="11" y2="11" stroke="#fff" stroke-width="2"/></svg>`;

        cardBackBodyDiv.style.padding = "1.25rem";
        cardBackBodyDiv.style.height = "400px";

        cardBackForm.id = "api-widget-form";

        cardBackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const data = {
                ApiWidgetFirstName: $('#ApiWidgetFirstName').val(),
                ApiWidgetLastName: $('#ApiWidgetLastName').val(),
                ApiWidgetEmail: $('#ApiWidgetEmail').val(),
                ApiWidgetApplicationType: $('#ApiWidgetApplicationType').val(),
                ApiWidgetRequestedLoanAmount: $('#ApiWidgetRequestedLoanAmount').val()
            };

            postData('https://mortgageexchangewebapp.azurewebsites.net/api/ApplicationApi', data)
                .then((result) => {
                    loadingGifDiv.style.display = "none";
                    resultContainer.innerHTML = result;
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    console.log('always called');
                });
        });

        row1Div.style.display = "flex";
        row1Div.style.flexWrap = "wrap";
        row1Div.style.marginRight = "-15px";
        row1Div.style.marginLeft = "-15px";

        row1Col1Div.style.position = "relative";
        row1Col1Div.style.width = "100%";
        row1Col1Div.style.minHeight = "1px";
        row1Col1Div.style.paddingRight = "15px";
        row1Col1Div.style.paddingLeft = "15px";

        row1Col1FormGroupDiv.style.marginBottom = "1rem";

        firstNameInput.type = "text";
        firstNameInput.id = "ApiWidgetFirstName";
        firstNameInput.name = "ApiWidgetFirstName";
        firstNameInput.placeholder = "First Name";
        firstNameInput.style.borderColor = "#dfe7f3";
        firstNameInput.style.border = "1px solid rgba(120, 141, 180, .3)";
        firstNameInput.style.color = "#323a48";
        firstNameInput.style.fontSize = ".875rem";
        firstNameInput.style.display = "block";
        firstNameInput.style.width = "100%";
        firstNameInput.style.padding = ".375rem .75rem";
        firstNameInput.style.lineHeight = "1.5";
        firstNameInput.style.backgroundColor = "#fff";
        firstNameInput.style.borderRadius = ".25rem";
        firstNameInput.style.transition = "border-color .15s ease-in-out, box-shadow .15s ease-in-out";
        firstNameInput.style.backgroundClip = "padding-box";
        firstNameInput.style.margin = "0";
        firstNameInput.style.fontFamily = "inherit";
        firstNameInput.style.overflow = "visible";
        firstNameInput.style.boxSizing = "border-box";

        row2Div.style.display = "flex";
        row2Div.style.flexWrap = "wrap";
        row2Div.style.marginRight = "-15px";
        row2Div.style.marginLeft = "-15px";

        row2Col1Div.style.position = "relative";
        row2Col1Div.style.width = "100%";
        row2Col1Div.style.minHeight = "1px";
        row2Col1Div.style.paddingRight = "15px";
        row2Col1Div.style.paddingLeft = "15px";

        row2Col1FormGroupDiv.style.marginBottom = "1rem";

        lastNameInput.type = "text";
        lastNameInput.id = "ApiWidgetLastName";
        lastNameInput.name = "ApiWidgetLastName";
        lastNameInput.placeholder = "Last Name";
        lastNameInput.style.borderColor = "#dfe7f3";
        lastNameInput.style.border = "1px solid rgba(120, 141, 180, .3)";
        lastNameInput.style.color = "#323a48";
        lastNameInput.style.fontSize = ".875rem";
        lastNameInput.style.display = "block";
        lastNameInput.style.width = "100%";
        lastNameInput.style.padding = ".375rem .75rem";
        lastNameInput.style.lineHeight = "1.5";
        lastNameInput.style.backgroundColor = "#fff";
        lastNameInput.style.borderRadius = ".25rem";
        lastNameInput.style.transition = "border-color .15s ease-in-out, box-shadow .15s ease-in-out";
        lastNameInput.style.backgroundClip = "padding-box";
        lastNameInput.style.margin = "0";
        lastNameInput.style.fontFamily = "inherit";
        lastNameInput.style.overflow = "visible";
        lastNameInput.style.boxSizing = "border-box";

        row3Div.style.display = "flex";
        row3Div.style.flexWrap = "wrap";
        row3Div.style.marginRight = "-15px";
        row3Div.style.marginLeft = "-15px";

        row3Col1Div.style.position = "relative";
        row3Col1Div.style.width = "100%";
        row3Col1Div.style.minHeight = "1px";
        row3Col1Div.style.paddingRight = "15px";
        row3Col1Div.style.paddingLeft = "15px";

        row3Col1FormGroupDiv.style.marginBottom = "1rem";

        emailInput.type = "text";
        emailInput.id = "ApiWidgetEmail";
        emailInput.name = "ApiWidgetEmail";
        emailInput.placeholder = "Email";
        emailInput.style.borderColor = "#dfe7f3";
        emailInput.style.border = "1px solid rgba(120, 141, 180, .3)";
        emailInput.style.color = "#323a48";
        emailInput.style.fontSize = ".875rem";
        emailInput.style.display = "block";
        emailInput.style.width = "100%";
        emailInput.style.padding = ".375rem .75rem";
        emailInput.style.lineHeight = "1.5";
        emailInput.style.backgroundColor = "#fff";
        emailInput.style.borderRadius = ".25rem";
        emailInput.style.transition = "border-color .15s ease-in-out, box-shadow .15s ease-in-out";
        emailInput.style.backgroundClip = "padding-box";
        emailInput.style.margin = "0";
        emailInput.style.fontFamily = "inherit";
        emailInput.style.overflow = "visible";
        emailInput.style.boxSizing = "border-box";

        row4Div.style.display = "flex";
        row4Div.style.flexWrap = "wrap";
        row4Div.style.marginRight = "-15px";
        row4Div.style.marginLeft = "-15px";

        row4Col1Div.style.position = "relative";
        row4Col1Div.style.width = "100%";
        row4Col1Div.style.minHeight = "1px";
        row4Col1Div.style.paddingRight = "15px";
        row4Col1Div.style.paddingLeft = "15px";

        row4Col1FormGroupDiv.style.marginBottom = "1rem";

        applicationTypeSelect.id = "ApiWidgetApplicationType";
        applicationTypeSelect.name = "ApiWidgetApplicationType";
        applicationTypeSelect.style.height = "calc(2.25rem + 2px)";
        applicationTypeSelect.style.borderColor = "#dfe7f3";
        applicationTypeSelect.style.border = "1px solid rgba(120, 141, 180, .3)";
        applicationTypeSelect.style.color = "#323a48";
        applicationTypeSelect.style.fontSize = ".875rem";
        applicationTypeSelect.style.display = "block";
        applicationTypeSelect.style.width = "100%";
        applicationTypeSelect.style.padding = ".375rem .75rem";
        applicationTypeSelect.style.lineHeight = "1.5";
        applicationTypeSelect.style.backgroundColor = "#fff";
        applicationTypeSelect.style.borderRadius = ".25rem";
        applicationTypeSelect.style.transition = "border-color .15s ease-in-out, box-shadow .15s ease-in-out";
        applicationTypeSelect.style.backgroundClip = "padding-box";
        applicationTypeSelect.style.margin = "0";
        applicationTypeSelect.style.fontFamily = "inherit";
        applicationTypeSelect.style.textTransform = "none";

        applicationTypeOption1.value = "-1";
        applicationTypeOption1.text = "Select Application Type";

        applicationTypeOption2.value = "0";
        applicationTypeOption2.text = "Purchase";

        applicationTypeOption3.value = "1";
        applicationTypeOption3.text = "Refinance";

        row5Div.style.display = "flex";
        row5Div.style.flexWrap = "wrap";
        row5Div.style.marginRight = "-15px";
        row5Div.style.marginLeft = "-15px";

        row5Col1Div.style.position = "relative";
        row5Col1Div.style.width = "100%";
        row5Col1Div.style.minHeight = "1px";
        row5Col1Div.style.paddingRight = "15px";
        row5Col1Div.style.paddingLeft = "15px";

        row5Col1FormGroupDiv.style.marginBottom = "1rem";

        requestedLoanAmountInput.type = "text";
        requestedLoanAmountInput.id = "ApiWidgetRequestedLoanAmount";
        requestedLoanAmountInput.name = "ApiWidgetRequestedLoanAmount";
        requestedLoanAmountInput.placeholder = "Requested Loan Amount";
        requestedLoanAmountInput.style.borderColor = "#dfe7f3";
        requestedLoanAmountInput.style.border = "1px solid rgba(120, 141, 180, .3)";
        requestedLoanAmountInput.style.color = "#323a48";
        requestedLoanAmountInput.style.fontSize = ".875rem";
        requestedLoanAmountInput.style.display = "block";
        requestedLoanAmountInput.style.width = "100%";
        requestedLoanAmountInput.style.padding = ".375rem .75rem";
        requestedLoanAmountInput.style.lineHeight = "1.5";
        requestedLoanAmountInput.style.backgroundColor = "#fff";
        requestedLoanAmountInput.style.borderRadius = ".25rem";
        requestedLoanAmountInput.style.transition = "border-color .15s ease-in-out, box-shadow .15s ease-in-out";
        requestedLoanAmountInput.style.backgroundClip = "padding-box";
        requestedLoanAmountInput.style.margin = "0";
        requestedLoanAmountInput.style.fontFamily = "inherit";
        requestedLoanAmountInput.style.overflow = "visible";
        requestedLoanAmountInput.style.boxSizing = "border-box";

        rowConsentDiv.style.display = "flex";
        rowConsentDiv.style.flexWrap = "wrap";
        rowConsentDiv.style.marginRight = "-15px";
        rowConsentDiv.style.marginLeft = "-15px";

        rowConsentColDiv.style.position = "relative";
        rowConsentColDiv.style.width = "100%";
        rowConsentColDiv.style.minHeight = "1px";
        rowConsentColDiv.style.paddingRight = "15px";
        rowConsentColDiv.style.paddingLeft = "15px";
        rowConsentColDiv.style.textAlign = "left";
        rowConsentColDiv.style.padding = "0 25px";

        consentDiv.style.marginBottom = "0";
        consentDiv.style.position = "relative";
        consentDiv.style.display = "block";
        consentDiv.style.paddingLeft = "1.25rem";

        consentCheckbox.type = "checkbox";
        consentCheckbox.style.boxSizing = "border-box";
        consentCheckbox.style.padding = "0";
        consentCheckbox.style.position = "absolute";
        consentCheckbox.style.marginTop = ".4rem";
        consentCheckbox.style.marginLeft = "-1.25rem";
        consentCheckbox.style.fontFamily = "inherit";
        consentCheckbox.style.fontSize = "inherit";
        consentCheckbox.style.lineHeight = "inherit";
        consentCheckbox.style.overflow = "visible";

        consentCheckbox.addEventListener("click", () => {
            if (consentCheckbox.checked) {
                createApplicationButton.style.backgroundColor = "#399af2";
                createApplicationButton.style.border = "1px solid #399af2";
                createApplicationButton.style.color = "rgba(255, 255, 255, 0.85)";
                createApplicationButton.style.cursor = "pointer";
                createApplicationButton.disabled = false;
            }
            else {
                createApplicationButton.style.backgroundColor = "rgba(57, 154, 242, .4)";
                createApplicationButton.style.border = "1px solid rgba(57, 154, 242, .4)";
                createApplicationButton.style.color = "#fff";
                createApplicationButton.style.cursor = "not-allowed";
                createApplicationButton.disabled = true;
            }
        });

        consentLabel.style.marginBottom = "0";
        consentLabel.style.fontSize = ".875rem";
        consentLabel.style.fontWeight = "400";
        consentLabel.style.display = "inline-block";

        consentLabelText.innerText = "I accept the "

        consentLabelLink.innerText = "Terms of Service";
        consentLabelLink.href = "https://www.lendcore.ca/";
        consentLabelLink.target = "_blank";
        consentLabelLink.style.color = "#399af2";
        consentLabelLink.style.outline = "0";
        consentLabelLink.style.textDecoration = "none";

        consentLabelLink.addEventListener("mouseover", () => {
            consentLabelLink.style.textDecoration = "none";
        });

        consentLabelLink.addEventListener("mouseout", () => {
            consentLabelLink.style.textDecoration = "none";
        });

        rowButtonsDiv.style.display = "flex";
        rowButtonsDiv.style.flexWrap = "wrap";
        rowButtonsDiv.style.marginRight = "-15px";
        rowButtonsDiv.style.marginLeft = "-15px";

        rowButtonsColDiv.style.position = "relative";
        rowButtonsColDiv.style.width = "100%";
        rowButtonsColDiv.style.minHeight = "1px";
        rowButtonsColDiv.style.paddingRight = "15px";
        rowButtonsColDiv.style.paddingLeft = "15px";
        rowButtonsColDiv.style.textAlign = "center";
        rowButtonsColDiv.style.padding = "25px 25px";

        createApplicationButton.type = "submit";
        createApplicationButton.innerText = "Create Application";
        createApplicationButton.style.cursor = "not-allowed";
        createApplicationButton.style.backgroundColor = "rgba(57, 154, 242, .4)";
        createApplicationButton.style.color = "#fff";
        createApplicationButton.style.border = "1px solid rgba(57, 154, 242, .4)";
        createApplicationButton.style.display = "inline-block";
        createApplicationButton.style.whiteSpace = "nowrap";
        createApplicationButton.style.userSelect = "none";
        createApplicationButton.style.padding = "8px 20px";
        createApplicationButton.style.fontSize = ".875rem";
        createApplicationButton.style.borderRadius = ".25rem";
        createApplicationButton.style.transition = "all .2s ease";
        createApplicationButton.style.height = "38px";
        createApplicationButton.style.verticalAlign = "middle";
        createApplicationButton.style.fontWeight = "300";
        createApplicationButton.style.textTransform = "none";
        createApplicationButton.style.margin = "0";
        createApplicationButton.style.fontFamily = "inherit";
        createApplicationButton.style.overflow = "visible";
        createApplicationButton.style.textAlign = "center";
        createApplicationButton.style.outline = "none";
        createApplicationButton.disabled = true;

        createApplicationButton.addEventListener("click", () => {
            cardBackForm.style.display = "none";
            loadingGifDiv.style.display = "block";
        });

        cancelButton.type = "button";
        cancelButton.innerText = "Cancel";
        cancelButton.style.cursor = "pointer";
        cancelButton.style.backgroundColor = "#fff";
        cancelButton.style.color = "#399af2";
        cancelButton.style.border = "1px solid #399af2";
        cancelButton.style.display = "inline-block";
        cancelButton.style.whiteSpace = "nowrap";
        cancelButton.style.userSelect = "none";
        cancelButton.style.padding = "8px 20px";
        cancelButton.style.fontSize = ".875rem";
        cancelButton.style.borderRadius = ".25rem";
        cancelButton.style.transition = "all .2s ease";
        cancelButton.style.height = "38px";
        cancelButton.style.verticalAlign = "middle";
        cancelButton.style.fontWeight = "300";
        cancelButton.style.textTransform = "none";
        cancelButton.style.margin = "0";
        cancelButton.style.fontFamily = "inherit";
        cancelButton.style.overflow = "visible";
        cancelButton.style.textAlign = "center";
        cancelButton.style.marginLeft = "5px";
        cancelButton.style.outline = "none";

        cancelButton.addEventListener("mouseover", () => {
            cancelButton.style.color = "#fff";
            cancelButton.style.backgroundColor = "#399af2";
            cancelButton.style.border = "1px solid #2b93f1";
            cancelButton.style.boxShadow = "0 5px 10px rgba(57, 154, 242, .4)";
            cancelButton.style.textDecoration = "none";
        });

        cancelButton.addEventListener("mouseout", () => {
            cancelButton.style.color = "#399af2";
            cancelButton.style.backgroundColor = "#fff";
            cancelButton.style.border = "1px solid #399af2";
            cancelButton.style.boxShadow = "none";
            cancelButton.style.textDecoration = "none";
        });

        cancelButton.addEventListener("click", () => {
            cardBackForm.reset();
            cardDiv.style.transform = "none";
        });

        let svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150'><rect fill="#FFF" width="100%" height="100%"/><path fill='none' stroke='#3992FA' stroke-width='15' stroke-linecap='round' stroke-dasharray='300 385' stroke-dashoffset='0' d='M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z'><animate attributeName='stroke-dashoffset' calcMode='spline' dur='2' values='685;-685' keySplines='0 0 1 1' repeatCount='indefinite'></animate></path></svg>`;
        let blob = new Blob([svg], { type: 'image/svg+xml' });
        let url = URL.createObjectURL(blob);

        loadingGifDiv.style.display = "none";

        loadingGifImg.src = url;
        loadingGifImg.width = "160";

        resultContainer.id = "api-widget-result";
        resultContainer.style.padding = "40px";
        resultContainer.style.fontStyle = "italic";

        cardBackFootertDiv.style.padding = "1rem 1.25rem";
        cardBackFootertDiv.style.fontSize = "1.1rem";
        cardBackFootertDiv.style.fontWeight = "400";
        cardBackFootertDiv.style.borderTop = "1px solid rgba(234, 243, 253, .7)";
        cardBackFootertDiv.lastChild.style.borderRadius = "0 0 calc(.25rem - 1px) calc(.25rem - 1px)";
        cardBackFootertDiv.style.textAlign = "center";

        cardBackFooterLink.href = "https://www.lendcore.ca/";
        cardBackFooterLink.target = "_blank";
        cardBackFooterLink.style.textDecoration = "none";

        cardBackFooterLink.addEventListener("mouseover", () => {
            cardBackFooterSpan.style.color = "rgb(20, 27, 77)";
            cardBackFooterLink.style.textDecoration = "none";
        });

        cardBackFooterLink.addEventListener("mouseout", () => {
            cardBackFooterSpan.style.color = "#839bb3";
            cardBackFooterLink.style.textDecoration = "none";
        });

        cardBackFooterSpan.style.color = "#839bb3";
        cardBackFooterSpan.style.marginRight = "5px";
        cardBackFooterSpan.style.fontSize = ".7rem";
        cardBackFooterSpan.innerText = "Powered by ";

        cardBackFooterLogoImg.src = "https://framerusercontent.com/images/jyhqQ1Le5gDeDRcArc9sfUfo8.png";
        cardBackFooterLogoImg.width = "80";
        cardBackFooterLogoImg.height = "80";
        cardBackFooterLogoImg.alt = "Lendcore";
        cardBackFooterLogoImg.style.maxWidth = "100%";
        cardBackFooterLogoImg.style.height = "auto";
        cardBackFooterLogoImg.style.verticalAlign = "middle";
        cardBackFooterLogoImg.style.borderStyle = "none";
        cardBackFooterLogoImg.style.boxSizing = "border-box";

        return cardContainerDiv;
    }
}

function initializeApiWidget() {
    return new ApiWidget();
}

initializeApiWidget();

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Network response was not OK');
    }

    return response.json();
}