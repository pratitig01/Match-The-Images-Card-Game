let cardsArray = [
        {
            'name': 'CSS',
            'img': 'data:image/png;base64,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',
        },
        {
            'name': 'HTML',
            'img': 'data:image/png;base64,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',
        },
        {
            'name': 'Java',
            'img': 'data:image/jpeg;base64,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',
        },
        {
            'name': 'JS',
            'img': 'data:image/png;base64,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',
        },
        {
            'name': 'MySql',
            'img': 'https://e7.pngegg.com/pngimages/747/798/png-clipart-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-thumbnail.png',
        },
        {
            'name': 'Python',
            'img': 'data:image/jpeg;base64,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',
        }
    ];


    const parentDiv = document.querySelector('#card-section');

    // step 2 to duplicate each card
    const gameCard = cardsArray.concat(cardsArray)
    console.log(gameCard)

    
    let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


    let clickCount = 0;
    let firstCard = "";
    let secondCard = "";


    // styling the match card
    const card_matches = () => {
        let card_selected = document.querySelectorAll('.card_selected');

        card_selected.forEach((curElem) => {
            curElem.classList.add('card_match')
        })
    }


    // step 7

    const resetGame = () => {
        firstCard = "";
        secondCard = "";
        clickCount = 0;

        let card_selected = document.querySelectorAll('.card_selected');

        card_selected.forEach((curElem) => {
            curElem.classList.remove('card_selected')
        })

    }

    // step 4
    parentDiv.addEventListener('click', (event) => {
        let curCard = event.target;

        if(curCard.id === "card-section"){return false }

        clickCount ++;

        if(clickCount < 3){

            if(clickCount === 1){
                firstCard = curCard.parentNode.dataset.name;
                curCard.parentNode.classList.add('card_selected');
            }else{
                secondCard = curCard.parentNode.dataset.name;
                curCard.parentNode.classList.add('card_selected');
            }

            if(firstCard !== "" && secondCard !== ""){
                if(firstCard === secondCard){
                    // curCard.classList.add('card_match')
                    setTimeout(() => {
                        card_matches()
                        resetGame()
                    }, 1000)

                }else{
                    setTimeout(() => {
                        resetGame()
                    }, 1000)
                }
            }

        }

    })


    // step 1 to add the card
    for(let i=0; i<shuffledChild.length; i++){

        const childDiv = document.createElement('div')
        childDiv.classList.add('card')
        childDiv.dataset.name = shuffledChild[i].name;
        // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

        const front_div = document.createElement('div');
        front_div.classList.add('front-card')

        const back_div = document.createElement('div');
        back_div.classList.add('back-card')

        back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

        parentDiv.appendChild(childDiv)

        childDiv.appendChild(front_div)
        childDiv.appendChild(back_div)
    }
