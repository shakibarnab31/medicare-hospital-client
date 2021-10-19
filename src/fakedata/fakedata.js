const services = [
    {
        id: 1,
        card_img: 'https://i.ibb.co/tPHd6n1/card-img-2.jpg',
        details_img: 'https://i.ibb.co/mh6rb58/details-img-3.jpg',
        name: 'Pediatrics',
        descripton: "Pediatrics is one of the best department in our hospital.We provide best of the doctors in this country.All time doctors are available and Nurses are ready to give best aid for the patient.With high quality technology and proper medicine and the environment of our hospitals are world class.Best quality Operation theater is available.We try our best to heal our patient.",
        doctors: [{ name: 'Dr. Robert Davis', info: 'Pediatrician', office: '2nd floor,room-204', img: 'https://i.ibb.co/NZqzNFR/doctor1.png' },
        { name: 'Dr. Helen Wilmore', info: 'Pediatrician', office: '4nd floor,room-411', img: 'https://i.ibb.co/711RYNJ/doctor2.png' },
        { name: 'Dr. Kristina Castle', info: 'Pediatrician', office: '3nd floor,room-304', img: 'https://i.ibb.co/54Pg67P/doctor3.png' }
        ]
    },
    {
        id: 2,
        card_img: 'https://i.ibb.co/Hx3Dqx9/card-img-4.jpg',
        details_img: 'https://i.ibb.co/16qXZjK/details-img-5.jpg',
        name: 'Cardiology',
        descripton: "Cardiology is one of the best department in our hospital.We provide best of the doctors in this country.All time doctors are available and Nurses are ready to give best aid for the patient.With high quality technology and proper medicine and the environment of our hospitals are world class.Best quality Operation theater is available.We try our best to heal our patient.",
        doctors: [{ name: 'Dr. Robert fenny', info: 'Cardiology Specialist', office: '2nd floor,room-203', img: 'https://i.ibb.co/NZqzNFR/doctor1.png' },
        { name: 'Dr. David Witch', info: 'Cardiology Specialist', office: '4nd floor,room-410', img: 'https://i.ibb.co/711RYNJ/doctor2.png' },
        { name: 'Dr. Kristina Palmer', info: 'Cardiology Specialist', office: '3nd floor,room-305', img: 'https://i.ibb.co/54Pg67P/doctor3.png' }
        ]
    },
    {
        id: 3,
        card_img: 'https://i.ibb.co/Dp5jPJY/card-img-5.jpg',
        details_img: 'https://i.ibb.co/zFc9nzS/details-img-6.jpg',
        name: 'Neurology',
        descripton: "Neurology is one of the best department in our hospital.We provide best of the doctors in this country.All time doctors are available and Nurses are ready to give best aid for the patient.With high quality technology and proper medicine and the environment of our hospitals are world class.Best quality Operation theater is available.We try our best to heal our patient.",
        doctors: [{ name: 'Dr. Neils Joe', info: 'Neurology Specialist', office: '2nd floor,room-206', img: 'https://i.ibb.co/NZqzNFR/doctor1.png' },
        { name: 'Dr. David Paker', info: 'Neurology Specialist', office: '4nd floor,room-413', img: 'https://i.ibb.co/711RYNJ/doctor2.png' },
        { name: 'Dr. Helena Kawacky', info: 'Neuro Sergon', office: '3nd floor,room-308', img: 'https://i.ibb.co/54Pg67P/doctor3.png' }
        ]
    },
    {
        id: 4,
        card_img: 'https://i.ibb.co/vVcCH9d/card-img-1.jpg',
        details_img: 'https://i.ibb.co/k5HnjfX/details-img-2.jpg',
        name: 'Dermatology',
        descripton: "Dermatology is one of the best department in our hospital.We provide best of the doctors in this country.All time doctors are available and Nurses are ready to give best aid for the patient.With high quality technology and proper medicine and the environment of our hospitals are world class.Best quality Operation theater is available.We try our best to heal our patient.",
        doctors: [{ name: 'Dr. Joe Feren', info: 'Dermatologist', office: '2nd floor,room-207', img: 'https://i.ibb.co/NZqzNFR/doctor1.png' },
        { name: 'Dr. David Archer', info: 'Dermatologist', office: '4nd floor,room-415', img: 'https://i.ibb.co/711RYNJ/doctor2.png' },
        { name: 'Dr. Elina Paron', info: 'Dermatologist', office: '3nd floor,room-309', img: 'https://i.ibb.co/54Pg67P/doctor3.png' }
        ]
    },
    {
        id: 5,
        card_img: 'https://i.ibb.co/Lpzysj2/card-img-3.jpg',
        details_img: 'https://i.ibb.co/LdJ7Tch/details-img-4.jpg',
        name: 'Aurthopedic',
        descripton: "Aurthopedic is one of the best department in our hospital.We provide best of the doctors in this country.All time doctors are available and Nurses are ready to give best aid for the patient.With high quality technology and proper medicine and the environment of our hospitals are world class.Best quality Operation theater is available.We try our best to heal our patient.",
        doctors: [{ name: 'Dr. Joe Aron', info: 'Aurthopedic Sergeon', office: '2nd floor,room-209', img: 'https://i.ibb.co/NZqzNFR/doctor1.png' },
        { name: 'Dr. Baily Roth', info: 'Aurthopedic Sergeon', office: '4nd floor,room-417', img: 'https://i.ibb.co/711RYNJ/doctor2.png' },
        { name: 'Dr. Elina Herley', info: 'Aurthopedic Sergeon', office: '3nd floor,room-311', img: 'https://i.ibb.co/54Pg67P/doctor3.png' }
        ]
    },
    {
        id: 6,
        card_img: 'https://i.ibb.co/LYXfX79/card-img-6.jpg',
        details_img: 'https://i.ibb.co/DtkwGLT/details-img-1.jpg',
        name: 'Gynecology',
        descripton: "Gynecology is one of the best department in our hospital.We provide best of the doctors in this country.All time doctors are available and Nurses are ready to give best aid for the patient.With high quality technology and proper medicine and the environment of our hospitals are world class.Best quality Operation theater is available.We try our best to heal our patient.",
        doctors: [{ name: 'Dr. Andrew Redon', info: 'Gynecologist', office: '2nd floor,room-211', img: 'https://i.ibb.co/NZqzNFR/doctor1.png' },
        { name: 'Dr. Malina Cheron', info: 'Gynecologist', office: '4nd floor,room-419', img: 'https://i.ibb.co/K5V7ch7/doctor4.png' },
        { name: 'Dr. Keira Bathely', info: 'Gynecologist', office: '3nd floor,room-312', img: 'https://i.ibb.co/54Pg67P/doctor3.png' }
        ]
    }
]