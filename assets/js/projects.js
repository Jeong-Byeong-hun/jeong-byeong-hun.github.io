$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/gagu.png',
            link: 'https://github.com/Jeong-Byeong-hun/gagubook',
            title: 'Gagubook',
            demo: false,
            technologies: ['Android', 'Retrofit2', 'Java'],
            description: "DB에 등록된 가구 중 매장이 판매하고 있는 제품의 이미지와 정보 API로 받아서 태블릿으로 고객들에게 정보를 보여주는 앱",
            categories: ['featured', 'java']
        },
        {
            image: 'assets/images/remotejobs.png',
            link: 'https://repl.it/@JeongByeonghun/Day-Thirteen-and-Fourteen#main.py',
            title: 'Jobs Scrap',
            demo: false,
            technologies: ['Python', 'Flask', 'Beautifulsoup'],
            description: "stackoverflow,  weworkremotely,  remotreok 세 개의 사이트에서 구인글을 스크랩해서 보여주고 csv파일로 다운로드 할 수 있는 사이트",
	 categories: ['featured', 'python']
        },
        {
            image: 'assets/images/newsSearch.png',
            link: 'https://github.com/Jeong-Byeong-hun/newsSearch',
            title: '3줄 뉴스',
            demo: 'https://github.com/abhn/Marvel',
            technologies: ['Android', 'Beautifulsoup', 'Python'],
            description: "단어를 검색하면 관련된 네이버API를 이용해 뉴스를 스크랩한 후 TextRank 알고리즘을 이용해 3줄 요약을 볼 수 있는 앱",
            categories: ['java', 'python']
        },
        {
            image: 'assets/images/jjayo.png',
            link: 'https://github.com/leolyoo/Jiayou',
            title: 'Jjayo',
            demo: false,
            technologies: ['Android', 'Glide', 'Java'],
            description: "중국어과 학생들을 위해 시간이 날 때 마다 중국어를 공부 할 수 있게 간단한 퀴즈와 따라 그리기를 넣은 앱",
            categories: ['java']
        },
		{
            image: 'assets/images/kotlin.png',
            link: 'https://github.com/Jeong-Byeong-hun/KotlinBasic',
            title: 'Kotlin Basic',
            demo: false,
            technologies: ['Android', 'Kotlin'],
            description: "코틀린 책을 보면서 책 내용에서 바꿔 만든 기초 앱",
            categories: ['kotlin']
        }
       
      
       
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">
                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}
        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>
                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}