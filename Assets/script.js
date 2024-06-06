$(document).ready(function() {
    const members = [
        { 
            name: 'Amanda Sukma',
            gen: 10,
            joinDate: '2020-08-27T00:00:00+07:00', 
            photo: './Assets/img/amanda.jpg'
        },
        { 
            name: 'Angelina CHristy',
            gen: 7,
            joinDate: '2018-09-29T00:00:00+07:00', 
            photo: './Assets/img/christy.jpg'
        },
        { 
            name: 'Aurellia',
            gen: 10,
            joinDate: '2020-08-27T00:00:00+07:00', 
            photo: './Assets/img/lia.jpg'
        },
        { 
            name: 'Azizi Asadel',
            gen: 7,
            joinDate: '2018-09-29T00:00:00+07:00', 
            photo: './Assets/img/zee.jpg'
        },
        { 
            name: 'Callista Alifia',
            gen: 10,
            joinDate: '2020-08-27T00:00:00+07:00', 
            photo: './Assets/img/callie.jpg'
        },
        { 
            name: 'Cornelia Vanisa',
            gen: 8,
            joinDate: '2019-04-27T00:00:00+07:00', 
            photo: './Assets/img/oniel.jpg'
        },
        { 
            name: 'Febriola Sinambela',
            gen: 7,
            joinDate: '2018-09-29T00:00:00+07:00', 
            photo: './Assets/img/olla.jpg'
        },
        { 
            name: 'Feni Fitriyanti',
            gen: 3,
            joinDate: '2014-03-15T00:00:00+07:00', 
            photo: './Assets/img/feni.jpg'
        },
        { 
            name: 'Fiony Alveria',
            gen: 8,
            joinDate: '2019-04-27T00:00:00+07:00', 
            photo: './Assets/img/fiony.jpg'
        },
        { 
            name: 'Flora Shafiq',
            gen: 8,
            joinDate: '2019-04-27T00:00:00+07:00', 
            photo: './Assets/img/flora.jpg'
        },
        { 
            name: 'Freya Jayawardana',
            gen: 7,
            joinDate: '2018-09-29T00:00:00+07:00', 
            photo: './Assets/img/freya.jpg'
        },
        { 
            name: 'Gabriela Abigail',
            gen: 10,
            joinDate: '2020-08-27T00:00:00+07:00', 
            photo: './Assets/img/ella.jpg'
        },
        { 
            name: 'Gita Sekar Andarini',
            gen: 6,
            joinDate: '2018-04-08T00:00:00+07:00', 
            photo: './Assets/img/gita.jpg'
        },
        { 
            name: 'Grace Octaviani',
            gen: 10,
            joinDate: '2020-07-25T00:00:00+07:00', 
            photo: './Assets/img/gracie.jpg'
        },
        { 
            name: 'Greesella Adhalia',
            gen: 10,
            joinDate: '2020-07-25T00:00:00+07:00', 
            photo: './Assets/img/greesel.jpg'
        },
        { 
            name: 'Helisma Putri',
            gen: 7,
            joinDate: '2018-09-29T00:00:00+07:00', 
            photo: './Assets/img/eli.jpg'
        },
        { 
            name: 'Indah Cahya',
            gen: 9,
            joinDate: '2019-12-01T00:00:00+07:00', 
            photo: './Assets/img/indah.jpg'
        },
        { 
            name: 'Indira Seruni',
            gen: 10,
            joinDate: '2020-08-27T00:00:00+07:00', 
            photo: './Assets/img/indira.jpg'
        },
        { 
            name: 'Jessica Chandra',
            gen: 7,
            joinDate: '2018-09-29T00:00:00+07:00', 
            photo: './Assets/img/jessi.jpg'
        },
        { 
            name: 'Jesslyn Elly',
            gen: 10,
            joinDate: '2020-08-27T00:00:00+07:00', 
            photo: './Assets/img/lyn.jpg'
        },
        { 
            name: 'Kathrina Irene',
            gen: 9,
            joinDate: '2019-12-01T00:00:00+07:00', 
            photo: './Assets/img/kathrina.jpg'
        },
        { 
            name: 'Lulu Salsabila',
            gen: 8,
            joinDate: '2019-04-27T00:00:00+07:00', 
            photo: './Assets/img/lulu.jpg'
        },
        { 
            name: 'Marsha Lenathea',
            gen: 9,
            joinDate: '2019-12-01T00:00:00+07:00', 
            photo: './Assets/img/marsha.jpg'
        },
        { 
            name: 'Mutiara Azzahra',
            gen: 7,
            joinDate: '2018-09-29T00:00:00+07:00', 
            photo: './Assets/img/muthe.jpg'
        },
        { 
            name: 'Raisha Syifa',
            gen: 10,
            joinDate: '2020-08-27T00:00:00+07:00', 
            photo: './Assets/img/raisha.jpg'
        },
        { 
            name: 'Reva Fidela',
            gen: 8,
            joinDate: '2019-04-27T00:00:00+07:00', 
            photo: './Assets/img/adel.jpg'
        },
        { 
            name: 'Shania Gracia',
            gen: 3,
            joinDate: '2014-03-15T00:00:00+07:00', 
            photo: './Assets/img/gracia.jpg'
        },
        { 
            name: 'Abigail Rachel',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/aralie.jpg'
        },
        { 
            name: 'Adeline Wijaya',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/delynn.jpg'
        },
        { 
            name: 'Aisa Maharani',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/shasa.jpg'
        },
        { 
            name: 'Alya Amanda',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/alya.jpg'
        },
        { 
            name: 'Anindya Ramadhani',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/anindya.jpg'
        },
        { 
            name: 'Aurhel Alana',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/lana.jpg'
        },
        { 
            name: 'Catherina Vallencia',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/erine.jpg'
        },
        { 
            name: 'Cathleen Nixie',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/cathy.jpg'
        },
        { 
            name: 'Celline Thefani',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/elin.jpg'
        },
        { 
            name: 'Chelsea Davina',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/chelsea.jpg'
        },
        { 
            name: 'Cynthia Yaputera',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/cynthia.jpg'
        },
        { 
            name: 'Dena Natalia',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/danella.jpg'
        },
        { 
            name: 'Desy Natalia',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/daisy.jpg'
        },
        { 
            name: 'Fritzy Rosmerian',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/fritzy.jpg'
        },
        { 
            name: 'Gendis Mayrannisa',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/gendis.jpg'
        },
        { 
            name: 'Hillary Abigail',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/lily.jpg'
        },
        { 
            name: 'Jazzlyn Trisha',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/trisha.jpg'
        },
        { 
            name: 'Letycia Moreen',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/moreen.jpg'
        },
        { 
            name: 'Michelle Alexandra',
            gen: 11,
            joinDate: '2022-10-31T00:00:00+07:00', 
            photo: './Assets/img/michie.jpg'
        },
        { 
            name: 'Michelle Levia',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/levi.jpg'
        },
        { 
            name: 'Nayla Suji',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/nayla.jpg'
        },
        { 
            name: 'Nina Tutachia',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/nachia.jpg'
        },
        { 
            name: 'Oline Manuel',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/oline.jpg'
        },
        { 
            name: 'Regina Wilian',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/regie.jpg'
        },
        { 
            name: 'Ribka Budiman',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/ribka.jpg'
        },
        { 
            name: 'Shabilqis Naila',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/nala.jpg'
        },
        { 
            name: 'Victoria Kimberly',
            gen: 12,
            joinDate: '2023-11-18T00:00:00+07:00', 
            photo: './Assets/img/kimmy.jpg'
        },
    ];

    const formatDate = (dateStr) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', options);
    };

    members.sort((a, b) => new Date(a.joinDate) - new Date(b.joinDate));

    members.forEach(member => {
        const countdownElement = document.createElement('div');
        countdownElement.classList.add('countup');
        countdownElement.innerHTML = `
            <div class="member-container">
                <img src="${member.photo}" data-src="${member.photo}" alt="${member.name}" class="member-photo lazyload">
                <span class="category-badge">Gen ${member.gen}</span>
            </div>
            <div class="member-details-container">
                <div class="member-details">
                    <h2 class="text-xl font-semibold member-name">${member.name}</h2>
                    <p class="text-gray-600">Joined on: <span class="join-date">${formatDate(member.joinDate)}</span></p>
                </div>
            </div>
            <div class="countup-timer-container">
                <div id="countup-${member.name}" class="text-2xl font-bold countup-timer"></div>
            </div>
        `;
        $("#countups").append(countdownElement);

        const updateCountup = () => {
            const now = new Date();
            const joinDate = new Date(member.joinDate);
        
            let years = now.getFullYear() - joinDate.getFullYear();
            let months = now.getMonth() - joinDate.getMonth();
            let days = now.getDate() - joinDate.getDate();
        
            if (days < 0) {
                months--;
                days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            }
        
            if (months < 0) {
                years--;
                months += 12;
            }
        
            const hours = now.getHours() - joinDate.getHours();
            const minutes = now.getMinutes() - joinDate.getMinutes();
            const seconds = now.getSeconds() - joinDate.getSeconds();
        
            let timeString = '';
        
            if (years > 0) {
                timeString += `${years}yrs `;
            }
            if (months > 0) {
                timeString += `${months}mths `;
            }
            if (days > 0 || (years === 0 && months === 0)) {
                timeString += `${days}d `;
            }
            timeString += `${hours}h ${minutes}m ${seconds}s`;
        
            document.getElementById(`countup-${member.name}`).innerText = timeString.trim();
        };        

        setInterval(updateCountup, 1000);
    });

    $("img.lazyload").lazyload();
});
