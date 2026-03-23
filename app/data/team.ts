export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedIn?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Mawande Ngidi",
    role: "Programme Director/Lead",
    image: "/Team Pictures/Mawande.webp",
    linkedIn: "https://za.linkedin.com/in/mawande-ngidi-mphil-su-66134053",
    bio: `Mawande Ngidi has close to 15 years of experience supporting public sector leaders with strategic and data-driven decision-support to improve government delivery. He is the AMALI Data Programme Lead, where he steers efforts to strengthen data systems and use across African cities.

He began his career at the Council for Scientific and Industrial Research (CSIR) as a researcher focused on spatial analytics, supporting all spheres of government with data to inform planning and service delivery. He then joined the Gauteng Premier's Delivery Unit as Director of Research and Data Analysis, where he led teams in developing evidence-based plans and performance management across the infrastructure, health, and economic development sectors.

At Delivery Associates (DA), Mawande served as a Senior Consultant, advising senior government leaders across Africa on strategic priority setting, delivery unit design, and embedding data-use in government systems. In Rwanda, he supported the definition of national priorities and the development of the Second National Strategy for Transformation (NST2), while also leading the establishment of a central Delivery Unit in the Prime Minister's Office to drive national priorities — most notably, foundational learning reform through the Ministry of Education. He also supported the Ministry of Health in Lesotho to develop a digitisation policy aimed at integrating health information systems and strengthening the use of data for service delivery.

Mawande holds a Master of Philosophy in Urban and Regional Science from Stellenbosch University.`,
  },
  {
    name: "Lesego Tshuwa",
    role: "City Data Advisor",
    image: "/Team Pictures/Lesego.webp",
    linkedIn: "https://za.linkedin.com/in/lesego-tshuwa-187a2549",
    bio: `Lesego Tshuwa is a built environment professional focused on working in and alongside governments to improve city operations. She is a City Data Advisor in the AMALI Data Programme, through which she contributes to supporting city leaders and their teams to improve practices in data management and use data to make government more efficient, accountable and equitable, and use data and evidence in a just way to solve complex challenges and improve processes.

As the dedicated coach and facilitator for two Ugandan cities, Lesego assists mayors and teams focus on issues of youth employment and greening, liveability and sanitation.

She previously served as a consultant at the World Bank, providing technical advisory services on township economic development to the South African Urban Programme's Cities Support Programme. She has also been involved in the Smart Cities Programme in South Africa, implemented in four metros in partnership with the Development Bank of Southern Africa.

Lesego has also worked for the University of the Witwatersrand, contributing to research by the School of Architecture and Planning, where the focus was on youth in Ekangala, Bronkhorstspruit, and how their work and housing compare to those of youth in Hawassa, Ethiopia.`,
  },
  {
    name: "Chukwuma Okolie",
    role: "City Data Advisor",
    image: "/Team Pictures/Chukwuma.webp",
    linkedIn: "https://ng.linkedin.com/in/chukwuma-j-okolie",
    bio: `Chukwuma J. Okolie is a geospatial professional, data scientist and licensed surveyor with about 14 years of experience in academia and the public and non-profit sectors. He holds a PhD in geomatics from the University of Cape Town, and his research interests lie in data fusion, geospatial artificial intelligence, GIScience, environmental modelling, and climate change. He is also an Associate Fellow with the Higher Education Academy (UK). Chukwuma is currently a data advisor with the AMALI Data Programme, through which he provides coaching and technical assistance to African mayors and their staff on data and performance management.

In 2023, he was lead data advisor to the cities of Kitwe and Lusaka in Zambia, where he facilitated the creation of data inventories, data-quality assessments, and the launch of data reporting tools for improved solid-waste management. He has received several awards, including the xyHT '40 under 40 Geospatial Leaders' award (2017), and the Space Generation Advisory Council – Space Technology for Earth Applications (SGAC-STEA) project group Member of the Year award (2022). Chukwuma has worked as a lecturer at several universities, teaching courses in digital mapping, geographic information systems, remote sensing, photogrammetry, land surveying, and technical communication.

He has also supervised several student research theses and is a collaborator in the 'Climate adaptation in the Gulf of Guinea' research project at Harvard University. He has published over 80 papers in peer-reviewed journals, conference proceedings, and other media. He is an active reviewer for scientific journals, and has led several research collaborations with international partners. Chukwuma is currently ranked No. 11 among the top 500 authors by scholarly output at the University of Lagos, based on Elsevier's SciVal author ranking (2020 to 2023).`,
  },
  {
    name: "Samukele Ngema",
    role: "City Data Advisor",
    image: "/Team Pictures/Samukele.webp",
    linkedIn: "https://za.linkedin.com/in/samukele-ngema-20552a195",
    bio: `Samukele Ngema is an urban and regional development scholar with a PhD from Stellenbosch University. His work focuses on advancing sustainable African cities through data-driven decision-making and evidence-based policy. With extensive experience in performance and data management practices, Samukele has collaborated with mayors and urban authorities across the African continent, including Windhoek, Freetown, Accra, and Kajiado.

His research and advisory work emphasize the critical role of data in shaping resilient, inclusive, and future-ready urban environments. By integrating performance metrics and innovative data systems into governance frameworks, he supports cities in improving service delivery, enhancing transparency, and fostering sustainable growth.`,
  },
  {
    name: "Zukisa Sogoni",
    role: "City Data Advisor",
    image: "/Team Pictures/Zukisa.jpg",
    linkedIn: "https://za.linkedin.com/in/zukisa-sogoni-56b44346",
    bio: `Zukisa Sogoni is a skilled geospatial analyst and town and regional planner with substantial experience in supporting South African cities through various predictive geospatial analytics. Presently, Zukisa is playing a key role as a City Data Advisor in the AMALI Data Programme. Zukisa's involvement extends to Ethiopian and Tanzanian cities, where he aids in improving data management and setting up performance management systems aligned with the mayors' legacy goals.

Before joining AMALI, Zukisa spent seven years at the CSIR and two years with the Western Cape Government's Department of Environmental Affairs and Development Planning. His tenure at CSIR was marked by his expertise in geospatial analytics, aiding in town and regional planning. He collaborated with various municipalities in projecting future social facility demands using geospatial modelling. He also developed a priority-based selection system for towns and was part of the team that worked on the National Spatial Development Framework.

At the Department of Environmental Affairs and Development Planning, Zukisa deepened his knowledge in the government side of town and regional planning, assisting municipalities with Spatial Development Frameworks (SDFs) and legal compliance. He led the Greater Cape Metro Growth Modelling exercise and was involved in developing the second-generation Provincial Spatial Development Framework for the province.`,
  },
];

export interface Partner {
  name: string;
  logo: string;
  bio: string;
}

export const PARTNERS: Partner[] = [
  {
    name: "African Centre for Cities",
    logo: "/ACC-Red-Logo-480x162.webp",
    bio: `ACC is an interdisciplinary hub at the University of Cape Town with a mandate to conduct meaningful research on how to understand, recast, and address pressing urban crises. ACC is recognized globally as a leading institution for urban research in Africa with a decade-long track record of promoting a Southern perspective on the future of cities.`,
  },
  {
    name: "Big Win Philanthropy",
    logo: "/Big-Win-Red-480x451.webp",
    bio: `Big Win Philanthropy has deep experience developing leadership programs, having co-developed the Harvard Ministerial Leadership Program held at Harvard University, and the Amujae Initiative hosted by the Ellen Johnson Sirleaf Presidential Center for Women and Development. Big Win also provides direct support to heads of state and public leaders across Africa who are pursuing transformational change.`,
  },
  {
    name: "Bloomberg Philanthropies",
    logo: "/BloombergPhilanthropies-927659917-480x150.webp",
    bio: `Bloomberg Philanthropies invests in 700 cities and 150 countries around the world to ensure better, longer lives for the greatest number of people. The organization focuses on creating lasting change in five key areas: the Arts, Education, Environment, Government Innovation, and Public Health.

Bloomberg Philanthropies encompasses all of Michael R. Bloomberg's giving, including his foundation, corporate, and personal philanthropy as well as Bloomberg Associates, a philanthropic consultancy that advises cities around the world. In 2023, Bloomberg Philanthropies distributed $3 billion.`,
  },
];
