document.addEventListener("DOMContentLoaded", function () {
    // Show content and hide others
    function showContent(contentId) {
        // Hide all dropdown content and other sections
        document.querySelectorAll('.dropdown-content, .content-section').forEach(content => {
            content.style.display = 'none';
            if (content.id !== contentId) {
                content.classList.remove('show')
            }
        });

        // Display the selected content if it exists
        const selectedContent = document.getElementById(contentId);
        const className = selectedContent.className || ''

        if (className.indexOf('show') >= 0) {
            selectedContent.classList.remove('show')
            selectedContent.style.display = 'none';
        } else {
            selectedContent.classList.add('show')
            selectedContent.style.display = 'block';
        }
        // if (selectedContent) {
        //     selectedContent.style.display = 'block';
        // }
    }

    // Attach event listeners for main menu buttons
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.nextElementSibling?.id; // 获取对应内容的 ID
            if (contentId) showContent(contentId); // 显示目标内容
        });
    });
    const itemData = {
        project1: [
            { img: './assets/60s/60s.jpg', text: 'In one of our early media studies tasks, we were required to create a 60-second vlog documenting "A Day in My Life" and prepare a storyboard beforehand as a planning tool. This task was not only an opportunity to practice video production but also a way to organize ideas visually. While creating the storyboard, I learned how to translate abstract ideas into specific visual layouts, pre-plan the sequence of shots, and set the rhythm for the story, which made the actual filming process more efficient and organized.</br></br>This task highlighted the importance of planning—storyboards are not just a pre-shooting aid but also a crucial part of expressing creativity and structured thinking. Additionally, working within the time limit taught me how to deliver impactful messages with minimal footage, improving my ability to prioritize content effectively.' },
            { video: './assets/60s/60s.mov', text: 'In one of our early media studies tasks, we were required to create a 60-second vlog documenting "A Day in My Life" and prepare a storyboard beforehand as a planning tool. This task was not only an opportunity to practice video production but also a way to organize ideas visually. While creating the storyboard, I learned how to translate abstract ideas into specific visual layouts, pre-plan the sequence of shots, and set the rhythm for the story, which made the actual filming process more efficient and organized.</br></br>This task highlighted the importance of planning—storyboards are not just a pre-shooting aid but also a crucial part of expressing creativity and structured thinking. Additionally, working within the time limit taught me how to deliver impactful messages with minimal footage, improving my ability to prioritize content effectively.' }
        ],
        project2: [
            { img: './assets/Lighting/lighting2.jpg', text: 'In the lighting workshop, we explored the use of key light and fill light to emphasize subjects and shape the overall visual composition. This practical session in the photography studio allowed us to analyze how lighting interacts with various angles and camera shots to convey distinct emotions and atmospheres.</br></br> Additionally, we incorporated props to enrich the visual dynamics, experimenting with the intensity and placement of lights and utilizing different colors to create depth and enhance the emotional tone of the scene. This workshop provided valuable insights into the pivotal role of lighting in visual storytelling and demonstrated how thoughtful light design can elevate both artistic expression and narrative impact.' },
            { img: './assets/Lighting/lighting3.jpg', text: 'In the lighting workshop, we explored the use of key light and fill light to emphasize subjects and shape the overall visual composition. This practical session in the photography studio allowed us to analyze how lighting interacts with various angles and camera shots to convey distinct emotions and atmospheres.</br></br> Additionally, we incorporated props to enrich the visual dynamics, experimenting with the intensity and placement of lights and utilizing different colors to create depth and enhance the emotional tone of the scene. This workshop provided valuable insights into the pivotal role of lighting in visual storytelling and demonstrated how thoughtful light design can elevate both artistic expression and narrative impact.' },

            { img: './assets/Lighting/lighting1.jpg', text: 'In the lighting workshop, we explored the use of key light and fill light to emphasize subjects and shape the overall visual composition. This practical session in the photography studio allowed us to analyze how lighting interacts with various angles and camera shots to convey distinct emotions and atmospheres.</br></br> Additionally, we incorporated props to enrich the visual dynamics, experimenting with the intensity and placement of lights and utilizing different colors to create depth and enhance the emotional tone of the scene. This workshop provided valuable insights into the pivotal role of lighting in visual storytelling and demonstrated how thoughtful light design can elevate both artistic expression and narrative impact.' },
            { img: './assets/Lighting/lighting4.jpg', text: 'In the lighting workshop, we explored the use of key light and fill light to emphasize subjects and shape the overall visual composition. This practical session in the photography studio allowed us to analyze how lighting interacts with various angles and camera shots to convey distinct emotions and atmospheres.</br></br> Additionally, we incorporated props to enrich the visual dynamics, experimenting with the intensity and placement of lights and utilizing different colors to create depth and enhance the emotional tone of the scene. This workshop provided valuable insights into the pivotal role of lighting in visual storytelling and demonstrated how thoughtful light design can elevate both artistic expression and narrative impact.' },

        ],
        project3: [
            { img: './assets/photographic/photographic7.jpg', text: 'This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style. </br></br>During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander’s unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.' },
            { img: './assets/photographic/photographic1.jpg', text: 'This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style. </br></br>During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander’s unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.' },
            { img: './assets/photographic/photographic2.jpg', text: 'This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style. </br></br>During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander’s unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.' },
            { img: './assets/photographic/photographic3.jpg', text: 'This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style. </br></br>During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander’s unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.' },
            { img: './assets/photographic/photographic4.jpg', text: 'This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style. </br></br>During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander’s unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.' },
            { img: './assets/photographic/photographic5.jpg', text: 'This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style. </br></br>During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander’s unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.' },
            { img: './assets/photographic/photographic6.jpg', text: 'This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style. </br></br>During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander’s unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.' },
            { video: './assets/photographic/photographicvideo.mov', text: 'This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style. </br></br>During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander’s unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.' },

        ],
        project4: [
            { video: './assets/Shoes/shoesvideo.mov', text: "The focus of this task was to storyboard and film a short sequence titled The Shoe. The narrative required depicting a character noticing their shoelace is untied, expressing frustration, kneeling to tie the shoelace, and continuing to walk. My storyboard utilized a combination of wide, mid, and close-up shots, employing various shot sizes and angles to effectively convey the storyline.</br></br>During the storyboard design process, ensuring seamless transitions between shots emerged as a critical challenge. Particularly in the initial planning stages, achieving natural continuity in actions and perspectives between different shots required significant attention. This encouraged a deeper focus on shot composition and action continuity to create a fluid and cohesive visual narrative.The most valuable learning from this project was mastering the use of establishing shots to effectively set the scene and help the audience quickly grasp the story’s context. Additionally, I practiced continuity editing, ensuring smooth transitions by precisely matching the character's actions across shots. Furthermore, I developed skills in marking actor positions to streamline the shooting process and used comprehensive shot coverage to enhance flexibility and creative options during post-production." },
            { img: './assets/Shoes/shoes1.jpg', text: "The focus of this task was to storyboard and film a short sequence titled The Shoe. The narrative required depicting a character noticing their shoelace is untied, expressing frustration, kneeling to tie the shoelace, and continuing to walk. My storyboard utilized a combination of wide, mid, and close-up shots, employing various shot sizes and angles to effectively convey the storyline.</br></br>During the storyboard design process, ensuring seamless transitions between shots emerged as a critical challenge. Particularly in the initial planning stages, achieving natural continuity in actions and perspectives between different shots required significant attention. This encouraged a deeper focus on shot composition and action continuity to create a fluid and cohesive visual narrative.The most valuable learning from this project was mastering the use of establishing shots to effectively set the scene and help the audience quickly grasp the story’s context. Additionally, I practiced continuity editing, ensuring smooth transitions by precisely matching the character's actions across shots. Furthermore, I developed skills in marking actor positions to streamline the shooting process and used comprehensive shot coverage to enhance flexibility and creative options during post-production." },

        ],
        project5: [
            { video: './assets/Stop/stopvideo.mov', text: 'This task involved creating a stop-motion animation using pictures taken from different angles and shot sizes to tell a story. My storyboard follows a potato as it transforms into a hash brown, using various perspectives like high-angle long shots and close-ups to bring the narrative to life in a fun and engaging way.</br></br>During the process, I realized that achieving smooth transitions between frames requires precise planning and more frequent captures. While the final video effectively conveyed the story, the pacing could have been improved by including additional frames and a wider variety of angles to make the animation feel more dynamic.</br></br>This project highlighted the importance of consistency in camera angles and shot composition to ensure a smooth and cohesive animation. It also showed me how seemingly minor elements, such as the placement of props or the timing of movements, can greatly influence the emotional tone and visual appeal of the final product.' },
            { img: './assets/Stop/stop1.jpg', text: 'This task involved creating a stop-motion animation using pictures taken from different angles and shot sizes to tell a story. My storyboard follows a potato as it transforms into a hash brown, using various perspectives like high-angle long shots and close-ups to bring the narrative to life in a fun and engaging way.</br></br>During the process, I realized that achieving smooth transitions between frames requires precise planning and more frequent captures. While the final video effectively conveyed the story, the pacing could have been improved by including additional frames and a wider variety of angles to make the animation feel more dynamic.</br></br>This project highlighted the importance of consistency in camera angles and shot composition to ensure a smooth and cohesive animation. It also showed me how seemingly minor elements, such as the placement of props or the timing of movements, can greatly influence the emotional tone and visual appeal of the final product.' },
        ],
        project6: [
            { video: './assets/Essay/essay.mov', text: 'This video essay aims to analyze and discuss the portrayal of Maleficent in Maleficent (2014). I selected two key scenes—Maleficent cursing Aurora and later kissing her out of remorse—to explore how director Robert Stromberg utilizes camera work, lighting design, and sound effects to depict Maleficent’s duality as both a villainous figure and a character capable of empathy.</br></br>Throughout this analysis, I gained a deeper understanding of how cinematic techniques work together to construct complex character portrayals. For instance, in the cursing scene, Stromberg’s use of low-angle shots and stark lighting emphasized Maleficent’s power and anger. Conversely, in the kissing scene, warm tones and soft music highlighted her vulnerability and remorse. This stark contrast revealed how Stromberg challenges traditional binary notions of good and evil by adding depth to characters.</br></br>However, analyzing subtle details in lighting and sound design proved challenging, as these elements often influence the audience on a subconscious level. By breaking down the scenes frame by frame, I uncovered how small changes, such as the placement of light sources or shifts in musical tone, can have a profound emotional impact.</br></br>Overall, this task enhanced my ability to critically analyze cinematic works and deepened my appreciation for how Stromberg integrates technical elements with narrative. It underscored the importance of meticulous attention to detail in creating emotionally resonant and visually compelling storytelling.' }
        ],
        'personal-info': [
            {
                video: './assets/Inspiration/inspirationvideo.mp4',
                text: ` <p style="">
          Lihua Tao, born in 2004 in Guangdong, China, currently resides in Australia. Since becoming a student at Trinity College, she has been studying Media and Communications, with her current goal being admission to the University of Melbourne. She has a passion for photography and music, and is enthusiastic about traveling with different types of cameras (e.g., DSLR and film cameras) to capture the beauty of life through her lens.
        </p>` }
        ],
        inspirations: [
            { video: './assets/Inspiration/inspirationvideo.mp4' },
            {
                text: ` <p style="">Billie Eilish serves as a significant inspiration for my creative work. Her dark, melancholic music style, combined with deeply personal and introspective lyrics, resonates with me on both an emotional and artistic level. The way she translates complex emotions into haunting melodies has influenced my own approach to storytelling and expression.</br></br>
Her journey of embracing individuality and breaking conventional norms has also shaped my perspective, encouraging me to explore themes of vulnerability, authenticity, and introspection in my creations. Through her music and personal story, she has inspired me to push boundaries and craft a style that reflects my unique experiences and emotions.

          </p>`
            },
            { img: './assets/Inspiration/inspiration.jpg' },
            {
                text: ` <p style="">She is the inspiration behind my creative works. Her unwavering support, kindness, and
            resilience motivate me, while her unique perspective on life compels me to view the world through new and
            transformative angles. The moments we shared in Japan, whether in the simplicity of daily routines or the
            excitement of unforgettable travels, have profoundly shaped my visual perspective, teaching me to find beauty
            in the ordinary.</br></br>
            Furthermore, her passion for the things she loves and her dedication to personal growth inspire me to pursue
            my own aspirations with the same fervor. Through my lens, I strive to capture the authenticity, warmth, and
            emotion she brings into my life—qualities that have become the driving force of my creativity.
          </p>`
            },
        ]

    }

    let itemIndex = 0
    let curShowProjectName = ''
    let curData = []
    const imgBox = document.querySelector('.img-box')
    const videoBox = document.querySelector('.video-box')
    const textBox = document.querySelector('.text-box')
    const leftIcon = document.querySelector('.left-icon')
    const rightIcon = document.querySelector('.right-icon')
    const projectName = document.querySelectorAll('.project-name')
    const aboutIem = document.querySelectorAll('.about-item')
    const pictureCont = document.querySelector('.pictureCont')
    const pictureContBox = document.querySelector('.pictureCont-box')
    const dropdownContent = document.querySelectorAll('.dropdown-content')
    const inspirationsBox = document.querySelector('.inspirations-box')
    const normalBox = document.querySelector('.normal-box')
    projectName.forEach((el) => {
        el.onclick = (e) => {
            // 当前数据
            const id = e.srcElement.getAttribute('data-project')
            curData = itemData[id]
            dropdownContent.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('show')
            });
            pictureContBox.classList.remove('about')
            pictureContBox.classList.remove('personal-info')
            pictureContBox.classList.remove('inspirations')
            // 切换其他
            if (curShowProjectName !== id) {
                pictureCont.classList.add('hide')
                pictureContBox.classList.remove('hide')
                itemIndex = 0
                initShow()
            } else {
                pictureCont.classList.toggle('hide')
                pictureContBox.classList.toggle('hide')
            }
            curShowProjectName = id
        }
    })
    aboutIem.forEach((el) => {
        el.onclick = (e) => {
            // 当前数据
            const id = e.srcElement.getAttribute('data-content')
            curData = itemData[id]
            dropdownContent.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('show')
            });
            pictureContBox.classList.add('about')
            pictureContBox.classList.remove('personal-info')
            pictureContBox.classList.remove('inspirations')
            pictureContBox.classList.add(id)
            // 切换其他
            if (curShowProjectName !== id) {
                pictureCont.classList.add('hide')
                pictureContBox.classList.remove('hide')
                initShow(id)
            } else {
                pictureCont.classList.toggle('hide')
                pictureContBox.classList.toggle('hide')
            }
            curShowProjectName = id
        }
    })

    function initShow(id) {
        if (id === 'inspirations') {
            let strHtml = ''
            curData.forEach((item)=>{
                if(item.img){
                    strHtml += `<img class="img-box ins-item" src="${item.img}" alt="" srcset="">`
                }
                if(item.text){
                    strHtml += `<div class="text-box ins-item">${item.text}</div>`
                }
                if(item.video){
                    strHtml += `<video class="video-box ins-item" controls src="${item.video}"></video>`
                }
            })
            inspirationsBox.innerHTML = strHtml
            inspirationsBox.classList.remove('hide')
            normalBox.classList.add('hide')
        } else {
            const img = curData[0].img || ''
            const video = curData[0].video || ''
            imgBox.src = img
            videoBox.src = video
            textBox.innerHTML = curData[0].text
            inspirationsBox.classList.add('hide')
            normalBox.classList.remove('hide')
        }
    }

    function toggleItem(type) {
        itemIndex = type == 'left' ? itemIndex - 1 : itemIndex + 1
        if (itemIndex < 0) {
            itemIndex = curData.length - 1
        }
        if (itemIndex > curData.length - 1) {
            itemIndex = 0
        }
        const img = curData[itemIndex].img || ''
        const video = curData[itemIndex].video || ''
        imgBox.src = img
        videoBox.src = video
        textBox.innerHTML = curData[itemIndex].text
    }
    leftIcon.onclick = function () {
        toggleItem('left')
    }
    rightIcon.onclick = function () {
        toggleItem('right')
    }

    // // Attach event listeners for project items
    // document.querySelectorAll('.project-name').forEach(project => {
    //     project.addEventListener('click', () => {
    //         const projectId = project.getAttribute('data-project'); // 使用自定义属性 data-project
    //         if (projectId) showContent(projectId); // 显示对应项目详情
    //     });
    // });

    // // Attach event listeners for other menu options (e.g., personal info)
    // document.querySelectorAll('.menu-btn').forEach(button => {
    //     button.addEventListener('click', () => {
    //         const contentId = button.getAttribute('data-content'); // 使用自定义属性 data-content
    //         if (contentId) showContent(contentId); // 显示目标内容
    //     });
    // });
});
