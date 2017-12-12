//Sarah Simpson Project 3 javascript

//user selects answers to 3 questions (x)
//prompt if user misses a button? or run without (x)
//change default of submit button (x)
//store answers (x)
//filter through shows for matching values store in new array (x)
//pick random show from new array (x)
//convert values into html elements (x)
//display random show (x)
//have button for new suggestion with same criteria or reset and try again (x)
//reset clears inputs (buttons) (x)
//want starting screen to show only intro to quiz (x)
//when clicked go to questions (x)

//design notes move law and sorter find modern font (x)
//make imgs square white border (x)
//splash intro screen (x)
//imgs as radio buttons  (x)
//future sarah do this https://dev.twitter.com/web/tweet-button


//this stores everything our app needs to run
    const lawNSorter = {};

// this is the show data.
    lawNSorter.shows = [
    {
        title: 'Scott & Bailey',
        Country: 'british',
        leadGender: 'female',
        leadAge: 'young',
        url: 'assets/scottBailey.jpg',
        bio:'Two BADASS female detectives. Sometimes they mess up their private lives...like sometimes I get so annoyed with DC Bailey but ugh it is so good just watch it!', 
        
    },
    {
        title: 'Law & Order:SVU',
        Country: 'notBritish',
        leadGender: 'female',
        leadAge: 'young',
        url: 'assets/lawOrder.jpg',
        bio: 'Mariska Hargitay!? More like Makes my heart gay... She deserves a holiday this show started in the 90s! Also Ice-T is in this.',

    },
    {
        title: 'Sherlock',
        Country: 'british',
        leadGender: 'male',
        leadAge: 'young',
        url: 'assets/sherlock.jpg',
        bio: 'Powerhouse performances from Benedict Cumberbatch as Sherlock and Martin Freeman as Doctor John Watson. a contemporary update this retelling includes Sherlock sending taunting texts to the police. ',

    }, 
    {
        title: 'Broadchurch',
        Country: 'british',
        leadGender: 'female',
        leadAge: 'young',
        url: 'assets/broadchurch.jpg',
        bio: 'David Tennant and the amazing Olivia Colman try to solve the murder of 11-year-old boy in a quiet seaside village. Well written and beautifully shot, it is  a slowly unfolding mystery that keeps your interest building.',

    }, 
    {
        title: 'Making A Murderer',
        Country: 'notBritish',
        leadGender: 'male',
        leadAge: 'young',
        url: 'assets/makingAMurderer.jpg',
        bio: 'Steven Avery spent 18 years in prison for being wrongfully convicted of sexual assault.Several years after he was released, he is accused of murder.This documentary is a twisty mystery and interesting look at the legal system.',

    }, 
    {
        title: 'Luther',
        Country: 'british',
        leadGender: 'male',
        leadAge: 'young',
        url: 'assets/luther.jpg',
        bio: 'Outstanding performance by Idris Elba as a brilliant but self-destructive detective. This show may test your morals as Luther sometimes has more in common with the criminals he hunts than he would admit.',
    }, 
    {
        title: 'Hannibal',
        Country: 'notBritish',
        leadGender: 'male',
        leadAge: 'young',
        url: 'assets/hannibal.jpg',
        bio: 'The series starts earlier than Silence of the Lambs focusing on the relationship between Hannibal and profiler Will Graham. The cinematography is so stunning  you almost forget the gore you are seeing isn’t art. This cancelled too soon show is weird, gory and beautiful.',
    },
    {
        title: 'Murder, She Wrote',
        Country: 'notBritish',
        leadGender: 'female',
        leadAge: 'senior',
        url: 'assets/sheWrote.jpg',
        bio: `Mystery writer and amateur detective Jessica Fletcher - a down-to-earth, middle-aged widow - ferrets out the criminals in idyllic Cabot Cove, Maine, which apparently is the murder capital of the WORLD for the show's 12- season run. Starring Angela Lansbury...that is really all you need to know.`,
    },
    {
        title: `Agatha Christie's Poirot`,
        Country: 'british',
        leadGender: 'male',
        leadAge: 'senior',
        url: 'assets/poirot.jpeg',
        bio: 'A whodunit series featuring a famous former Belgian policeman, who settled for good in London after the war and becomes a private detective. 13 series and 70 episodes all based on Agatha Christie’s novels or short story so settle in with a cup of tea and some mustache wax.',
    },
    {
        title: `Agatha Christie's Marple `,
        Country: 'british',
        leadGender: 'female',
        leadAge: 'senior',
        url: 'assets/marple.jpg',
        bio: 'Miss Jane Marple, an elderly spinster who often visits her friends and relatives stumbling upon mysterious murders which she then helps solve. My grandmother never did that.',
    },
    {
        title: 'Rosemary & Thyme',
        Country: 'british',
        leadGender: 'female',
        leadAge: 'senior',
        url: 'assets/rAndT.jpg',
        bio: 'The theme is murder mysteries in the setting of professional gardening jobs. Yep that is what I said…you know that old trope.',
    },
    {
        title: 'Matlock',
        Country: 'notBritish',
        leadGender: 'male',
        leadAge: 'senior',
        url: 'assets/matlock.jpg',
        bio: 'Did you know Matlock charges one hundred thousand dollars to take a case. I think he always wins… but still seems a bit much. ',
    },
    {
        title: 'Columbo',
        Country: 'notBritish',
        leadGender: 'male',
        leadAge: 'senior',
        url: 'assets/columbo.jpg',
        bio: `Columbo is known for his  shambling manner, beige raincoat, and somewhat disheveled appearance. The suspects often unthreatened by him tend to incriminate themselves or a confess after they hear those trademark words “There’s just one more thing…”`,
    },
    {
        title: 'Happy Valley',
        Country: 'british',
        leadGender: 'female',
        leadAge: 'young',
        url: 'assets/happyValley.jpg',
        bio: 'This is a much watch.  BAFTA Award winner for Best Drama Series and 100% from critics on Rotten Tomatoes. It is Dark, edgy, and suspenseful.',
    },
    {
        title: 'Veronica Mars',
        Country: 'notBritish',
        leadGender: 'female',
        leadAge: 'young',
        url: 'assets/veronicaMars.jpg',
        bio: `Veronica's biggest problem was getting dumped by her boyfriend, Duncan Kane, until the murder of her best friend Lilly Kane. Veronica is the daughter of the former sheriff sleuthing is in Veronica’s blood.You might be expecting a fluffy teen show but this mystery hooks you.`,
    },
    {
        title: 'The Jinx: The Life and Deaths of Robert Durst',
        Country: 'notBritish',
        leadGender: 'male',
        leadAge: 'senior',
        url: 'assets/jinx.jpg',
        bio:`Andrew Jarecki directed a feature film inspired by Robert Durst's life. Largely focused on  Durst being suspected of murdering multiple people. Then Robert Durst calls Andrew up after the film is released to tell his side of the story. This  documentary miniseries  they create is mind boggling. Don’t read any spoilers before watching.`,
    },
    {
        title: 'The People v. O.J. Simpson, American Crime Story ',
        Country: 'notBritish',
        leadGender: 'female',
        leadAge: 'young',
        url: 'assets/ojSimpson.jpg',
        bio: `Most people have some memory of this trial but this series portrays all the prosecutors' emotional ups and downs. Shows how both racism and sexism played a role in the case. Sarah Paulson is amazing as prosecutor Marcia Clark.`,
    },
    {
        title: 'Mindhunter',
        Country: 'notBritish',
        leadGender: 'male',
        leadAge: 'young',
        url: 'assets/mindhunter.png',
        bio: 'Set in the late 1970s we see the coining of the phrase “serial killer”, as two FBI agents are tasked with profiling these killers to help solve open cases. Several famous murderers are referenced or make an appearance. The character actor who portrays Edmund Kemper steals the series.',
    },
    {
        title: 'The Killing',
        Country: 'notBritish',
        leadGender: 'female',
        leadAge: 'young',
        url: 'assets/theKilling.jpg',
        bio: 'Adaptation of a Danish-TV crime drama it is a slow burning, moody, character-driven detective procedural surrounding the murder of a teenage girl.',
    },
    {
        title: 'Dexter',
        Country: 'notBritish',
        leadGender: 'male',
        leadAge: 'young',
        url: 'assets/dexter.jpg',
        bio: 'Dexter Morgan is a blood spatter expert and serial killer. Dexter tries his best to live by a moral code with mixed results. It is a drama and gory but also has silly moments as Dexter tries to maintain two very different lives.',
    },
    {
        title: 'The Fall',
        Country: 'british',
        leadGender: 'female',
        leadAge: 'young',
        url: 'assets/theFall.jpeg',
        bio: 'British-Irish crime drama television series filmed and set in Northern Ireland. It stars Gillian Anderson tasked with finding and capturing a serial killer who is attacking young professional women. Don’t watch this one alone or invest in a good security system.',
    }
    ]; 

    function randomItem(finalArray) {
        const index = Math.floor(Math.random() * finalArray.length);
        return finalArray[index];
    }
   
    lawNSorterAnswers = {};
   
    lawNSorter.events = function () {
        $('form').on('submit', function (e) {
            e.preventDefault();
            console.log('form submitted');
            lawNSorterAnswers = $('input[type=radio]:checked').length;
            
            //this makes sure the user can't skip questions
            if (lawNSorterAnswers < 3) {
                alert('I need some evidence to work with. Answer all the questions.');
             }
             //storing answers
            const userCountry = $('input[name=teaOrCoffee]:checked').val();
           
            const userGender = $('input[name=femaleOrMale]:checked').val();
            
            const userAge = $('input[name=age]:checked').val();
          
            //selecting matches
            const goodShow = lawNSorter.shows.filter((show) => {
                return show.Country === userCountry;
            });
            console.log(goodShow);
            const betterShow = goodShow.filter((show) => {
                return show.leadGender === userGender;
            });
            console.log(betterShow);
            const bestShow = betterShow.filter((show) => {
                return show.leadAge === userAge;
            });
            
            //final option and getting it on screen
            const optionToDisplay = randomItem(bestShow);
            
            $('.suggestedShow').html(`<h1 class='choice'>${optionToDisplay.title}</h1>
            <div class="content">
                <img class='showPic' src="${optionToDisplay.url}">
                <p class='bio'>${optionToDisplay.bio}</p>
            </div>
            <div class='btnGroup'>
            <input class="buttonStyle" type="submit" value="Give me more">
            <input class="buttonStyle switch" type="reset" id="suggestionReset" value="Restart">
            </div>`);
            
        });//end of form functions

        //this plays your sounds on click
        var audio = $('#mysoundclip')[0];
        $('input.play').click(function () {
            audio.play();
        });

        //this is getting rid of the starting info
        $('#startGame').on('click', function(hiding){
           $('header').hide(); 
           $('.secret').show(); 

        });
        //this toggles between quiz halves
         $('body').on('click', '.switch', function (switching) {
             if ($('input[type=radio]:checked').length == 3){

                 $('.quiz').toggle(''); //http://jqueryui.com/toggle/
             } 
        })


       //is there a more accessible way to do this? come back time permitting
        $('.question').mouseenter(function (movement) {
            $(this).find('img').jAnimateOnce('tada');
        });
        $('.question').touchstart(function (movement) {
            $(this).find('img').jAnimateOnce('tada');
        });
        


    };//end of lawNSorter.events function
         
    

    

    

$(function () {
    //console.log(lawNSorter);
    lawNSorter.events();

    });

