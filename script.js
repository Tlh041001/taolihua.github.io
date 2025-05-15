let p3Images = [
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic5.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic2.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic6.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic1.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic4.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic3.jpg',

]
let p3ImagesIndex = 0;

let p4Images = [
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/inspirations/1.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/inspirations/2.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/inspirations/3.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/inspirations/4.jpg',
]
let p4ImagesIndex = 0;

let lightingImagesIndex = 0;
let lightingImages = [
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/lighting/1.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/lighting/2.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/lighting/3.jpg',
    'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/lighting/4.jpg',
]

let personalImagesIndex = 0;
let personalImages = [
 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/Personal Info/1.jpg',
 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/Personal Info/2.jpg',
 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/Personal Info/3.jpg',
 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/Personal Info/4.jpg',
 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/Personal Info/5.jpg',
 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/Personal Info/6.jpg',
]

let prodcastImagesIndex = 0;
let prodcastImages = [
 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/Newsroom/Podcast/1.jpg',
 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/Newsroom/Podcast/2.jpg'
]

function preloadImages() {
    const allImages = [...p3Images, ...p4Images, ...lightingImages,...personalImages, ...prodcastImages];
    allImages.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Show content and hide others
    preloadImages();
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

    var lt = document.getElementById('lt');
    var rt = document.getElementById('rt');
    var p3Image = document.getElementById('p3image');
    lt.addEventListener('click', () => {
        p3ImagesIndex = (p3ImagesIndex - 1 + p3Images.length) % p3Images.length;
        p3Image.src = p3Images[p3ImagesIndex];
    });
    rt.addEventListener('click', () => {
        p3ImagesIndex = (p3ImagesIndex + 1) % p3Images.length;
        p3Image.src = p3Images[p3ImagesIndex];
    });

    var lt1 = document.getElementById('lt1');
    var rt1 = document.getElementById('rt1');
    var p4Image = document.getElementById('p4image');
    lt1.addEventListener('click', () => {
        p4ImagesIndex = (p4ImagesIndex - 1 + p4Images.length) % p4Images.length;
        p4Image.src = p4Images[p4ImagesIndex];
    });
    rt1.addEventListener('click', () => {
        p4ImagesIndex = (p4ImagesIndex + 1) % p4Images.length;
        p4Image.src = p4Images[p4ImagesIndex];
    });

    var lt2 = document.getElementById('lt2');
    var rt2 = document.getElementById('rt2');
    var personalImage = document.getElementById('personal-image');
    lt2.addEventListener('click', () => {
        personalImagesIndex = (personalImagesIndex - 1 + personalImages.length) % personalImages.length;
        personalImage.src = personalImages[personalImagesIndex];
    });
    rt2.addEventListener('click', () => {
        personalImagesIndex = (personalImagesIndex + 1) % personalImages.length;
        personalImage.src = personalImages[personalImagesIndex];
    });

    var lt3 = document.getElementById('lt3');
    var rt3 = document.getElementById('rt3');
    var prodcastImage = document.getElementById('prodcast-image');
    lt3.addEventListener('click', () => {
        prodcastImagesIndex = (prodcastImagesIndex - 1 + prodcastImages.length) % prodcastImages.length;
        prodcastImage.src = prodcastImages[prodcastImagesIndex];
    })
    rt3.addEventListener('click', () => {
        prodcastImagesIndex = (prodcastImagesIndex + 1) % prodcastImages.length;
        prodcastImage.src = prodcastImages[prodcastImagesIndex];
    })



    var llt = document.getElementById('l-lt');
    var lrt = document.getElementById('l-rt');
    var lightingImage = document.getElementById('lighting-image');
    llt.addEventListener('click', () => {
        lightingImagesIndex = (lightingImagesIndex - 1 + lightingImages.length) % lightingImages.length;
        lightingImage.src = lightingImages[lightingImagesIndex];
    });
    lrt.addEventListener('click', () => {
        lightingImagesIndex = (lightingImagesIndex + 1) % lightingImages.length;
        lightingImage.src = lightingImages[lightingImagesIndex];
    });




    // Attach event listeners for main menu buttons
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.nextElementSibling?.id; // 获取对应内容的 ID
            if (contentId) showContent(contentId); // 显示目标内容
        });
    });
    const itemData = {
        project1: [
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/60s/60s.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">60s Daily Vlog</p></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            In one of our early media studies tasks, we were required to create a 60-second vlog documenting "A Day in My Life" and prepare a storyboard beforehand as a planning tool. This task was not only an opportunity to practice video production but also a way to organize ideas visually. While creating the storyboard, I learned how to translate abstract ideas into specific visual layouts, pre-plan the sequence of shots, and set the rhythm for the story, which made the actual filming process more efficient and organized.</br></br>
            This task highlighted the importance of planning—storyboards are not just a pre-shooting aid but also a crucial part of expressing creativity and structured thinking. Additionally, working within the time limit taught me how to deliver impactful messages with minimal footage, improving my ability to prioritize content effectively.
            </p>
        </div>`},
            { video: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/60s/60s.mov', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">60s Daily Vlog</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            In one of our early media studies tasks, we were required to create a 60-second vlog documenting "A Day in My Life" and prepare a storyboard beforehand as a planning tool. This task was not only an opportunity to practice video production but also a way to organize ideas visually. While creating the storyboard, I learned how to translate abstract ideas into specific visual layouts, pre-plan the sequence of shots, and set the rhythm for the story, which made the actual filming process more efficient and organized.</br></br>
            This task highlighted the importance of planning—storyboards are not just a pre-shooting aid but also a crucial part of expressing creativity and structured thinking. Additionally, working within the time limit taught me how to deliver impactful messages with minimal footage, improving my ability to prioritize content effectively.
            </p>
        </div>`
            }
        ],
        project2: [
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Lighting/lighting2.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Lighting Workshop</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            In the lighting workshop, we explored the use of key light and fill light to emphasize subjects and shape the overall visual composition. This practical session in the photography studio allowed us to analyze how lighting interacts with various angles and camera shots to convey distinct emotions and atmospheres.</br></br>
            Additionally, we incorporated props to enrich the visual dynamics, experimenting with the intensity and placement of lights and utilizing different colors to create depth and enhance the emotional tone of the scene. This workshop provided valuable insights into the pivotal role of lighting in visual storytelling and demonstrated how thoughtful light design can elevate both artistic expression and narrative impact.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Lighting/lighting3.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Lighting Workshop</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            In the lighting workshop, we explored the use of key light and fill light to emphasize subjects and shape the overall visual composition. This practical session in the photography studio allowed us to analyze how lighting interacts with various angles and camera shots to convey distinct emotions and atmospheres.</br></br>
            Additionally, we incorporated props to enrich the visual dynamics, experimenting with the intensity and placement of lights and utilizing different colors to create depth and enhance the emotional tone of the scene. This workshop provided valuable insights into the pivotal role of lighting in visual storytelling and demonstrated how thoughtful light design can elevate both artistic expression and narrative impact.
            </p>
        </div>`
            },

            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Lighting/lighting1.jpg',text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Lighting Workshop</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            In the lighting workshop, we explored the use of key light and fill light to emphasize subjects and shape the overall visual composition. This practical session in the photography studio allowed us to analyze how lighting interacts with various angles and camera shots to convey distinct emotions and atmospheres.</br></br>
            Additionally, we incorporated props to enrich the visual dynamics, experimenting with the intensity and placement of lights and utilizing different colors to create depth and enhance the emotional tone of the scene. This workshop provided valuable insights into the pivotal role of lighting in visual storytelling and demonstrated how thoughtful light design can elevate both artistic expression and narrative impact.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Lighting/lighting4.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Lighting Workshop</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            In the lighting workshop, we explored the use of key light and fill light to emphasize subjects and shape the overall visual composition. This practical session in the photography studio allowed us to analyze how lighting interacts with various angles and camera shots to convey distinct emotions and atmospheres.</br></br>
            Additionally, we incorporated props to enrich the visual dynamics, experimenting with the intensity and placement of lights and utilizing different colors to create depth and enhance the emotional tone of the scene. This workshop provided valuable insights into the pivotal role of lighting in visual storytelling and demonstrated how thoughtful light design can elevate both artistic expression and narrative impact.
            </p>
        </div>`
            },

        ],
        project3: [
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic7.jpg',
                text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Photographic Emulation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style.</br></br>
            During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander's unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic1.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Photographic Emulation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style.</br></br>
            During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander's unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic2.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Photographic Emulation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style.</br></br>
            During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander's unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic3.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Photographic Emulation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style.</br></br>
            During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander's unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic4.jpg',text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Photographic Emulation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style.</br></br>
            During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander's unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic5.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Photographic Emulation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style.</br></br>
            During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander's unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographic6.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Photographic Emulation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style.</br></br>
            During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander's unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.
            </p>
        </div>`
            },
            { video: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographicvideo.mov', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Photographic Emulation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This was our first group presentation task in the Media and Communications course. The assignment required us to select a renowned photographer, recreate three of their iconic works, and present our creative outcomes and research process through a comprehensive video essay. Our group chose Lee Friedlander, whose signature photography is characterized by reflections, shadows, and urban landscapes, showcasing a distinctive style.</br></br>
            During the project, I gained valuable experience in collaborative planning and execution, conducted an in-depth analysis of Friedlander's unique artistic style, and experimented with replicating his works through lens language and composition techniques. Additionally, I learned how to redesign the recreated works to incorporate personal creativity, while enhancing skills in video editing, voiceover narration, and the application of cinematic concepts such as shot sizes and angles. This task provided me with a deeper understanding of the unique charm and value of photography as both an art form and a storytelling tool.
            </p>
        </div>`
            },

        ],
        project4: [
            { video: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Shoes/shoesvideo.mov', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">The Shoes</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            The focus of this task was to storyboard and film a short sequence titled The Shoe. The narrative required depicting a character noticing their shoelace is untied, expressing frustration, kneeling to tie the shoelace, and continuing to walk. My storyboard utilized a combination of wide, mid, and close-up shots, employing various shot sizes and angles to effectively convey the storyline.</br></br>
            During the storyboard design process, ensuring seamless transitions between shots emerged as a critical challenge. Particularly in the initial planning stages, achieving natural continuity in actions and perspectives between different shots required significant attention. This encouraged a deeper focus on shot composition and action continuity to create a fluid and cohesive visual narrative. The most valuable learning from this project was mastering the use of establishing shots to effectively set the scene and help the audience quickly grasp the story's context. Additionally, I practiced continuity editing, ensuring smooth transitions by precisely matching the character's actions across shots. Furthermore, I developed skills in marking actor positions to streamline the shooting process and used comprehensive shot coverage to enhance flexibility and creative options during post-production.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Shoes/shoes1.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">The Shoes</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            The focus of this task was to storyboard and film a short sequence titled The Shoe. The narrative required depicting a character noticing their shoelace is untied, expressing frustration, kneeling to tie the shoelace, and continuing to walk. My storyboard utilized a combination of wide, mid, and close-up shots, employing various shot sizes and angles to effectively convey the storyline.</br></br>
            During the storyboard design process, ensuring seamless transitions between shots emerged as a critical challenge. Particularly in the initial planning stages, achieving natural continuity in actions and perspectives between different shots required significant attention. This encouraged a deeper focus on shot composition and action continuity to create a fluid and cohesive visual narrative. The most valuable learning from this project was mastering the use of establishing shots to effectively set the scene and help the audience quickly grasp the story's context. Additionally, I practiced continuity editing, ensuring smooth transitions by precisely matching the character's actions across shots. Furthermore, I developed skills in marking actor positions to streamline the shooting process and used comprehensive shot coverage to enhance flexibility and creative options during post-production.
            </p>
        </div>`
            },

        ],
        project5: [
            { video: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Stop/stopvideo.mov', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Stop-motion Animation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This task involved creating a stop-motion animation using pictures taken from different angles and shot sizes to tell a story. My storyboard follows a potato as it transforms into a hash brown, using various perspectives like high-angle long shots and close-ups to bring the narrative to life in a fun and engaging way.</br></br>
            During the process, I realized that achieving smooth transitions between frames requires precise planning and more frequent captures. While the final video effectively conveyed the story, the pacing could have been improved by including additional frames and a wider variety of angles to make the animation feel more dynamic.</br></br>
            This project highlighted the importance of consistency in camera angles and shot composition to ensure a smooth and cohesive animation. It also showed me how seemingly minor elements, such as the placement of props or the timing of movements, can greatly influence the emotional tone and visual appeal of the final product.
            </p>
        </div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Stop/stop1.jpg', text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Stop-motion Animation</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            This task involved creating a stop-motion animation using pictures taken from different angles and shot sizes to tell a story. My storyboard follows a potato as it transforms into a hash brown, using various perspectives like high-angle long shots and close-ups to bring the narrative to life in a fun and engaging way.</br></br>
            During the process, I realized that achieving smooth transitions between frames requires precise planning and more frequent captures. While the final video effectively conveyed the story, the pacing could have been improved by including additional frames and a wider variety of angles to make the animation feel more dynamic.</br></br>
            This project highlighted the importance of consistency in camera angles and shot composition to ensure a smooth and cohesive animation. It also showed me how seemingly minor elements, such as the placement of props or the timing of movements, can greatly influence the emotional tone and visual appeal of the final product.
            </p>
        </div>`
            },
        ],
        project6: [
            { video: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/photographic/photographicvideo.mov',

                text: `<div style="display: block;  line-height: 1.5;">
            <p style="text-align: left;font-family:'Times New Roman', serif;width: 1200px" class="title">
            Video Essay</p></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
            
            This video essay aims to analyze and discuss the portrayal of Maleficent in Maleficent (2014). I selected two key scenes—Maleficent cursing Aurora and later kissing her out of remorse—to explore how director Robert Stromberg utilizes camera work, lighting design, and sound effects to depict Maleficent's duality as both a villainous figure and a character capable of empathy.
            Throughout this analysis, I gained a deeper understanding of how cinematic techniques work together to construct complex character portrayals. For instance, in the cursing scene, Stromberg's use of low-angle shots and stark lighting emphasized Maleficent's power and anger. Conversely, in the kissing scene, warm tones and soft music highlighted her vulnerability and remorse. This stark contrast revealed how Stromberg challenges traditional binary notions of good and evil by adding depth to characters.</br></br>
            However, analyzing subtle details in lighting and sound design proved challenging, as these elements often influence the audience on a subconscious level. By breaking down the scenes frame by frame, I uncovered how small changes, such as the placement of light sources or shifts in musical tone, can have a profound emotional impact.</br></br>
            Overall, this task enhanced my ability to critically analyze cinematic works and deepened my appreciation for how Stromberg integrates technical elements with narrative. It underscored the importance of meticulous attention to detail in creating emotionally resonant and visually compelling storytelling.
            </p>
        </div>`
            },
        ],
        'personal-info': [
            {
                video: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Inspiration/inspirationvideo.mp4',
                text: ` <div style="top: -30%;left: 50%;line-height: 1.5;">
    <p style="text-align: left;font-family:'Times New Roman', serif;" class="title"> Lihua Tao</p> <br><br>
    <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
        Lihua Tao, born in 2004 in Guangdong, China, currently resides in Australia. Since becoming a student at Trinity College, she has been studying Media and Communications, with her current goal being admission to the University of Melbourne. She has a passion for photography and music, and is enthusiastic about traveling with different types of cameras (e.g., DSLR and film cameras) to capture the beauty of life through her lens.
    </p>
</div>
` }
        ],
        inspirations: [
            { video: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Inspiration/inspirationvideo.mp4' },
            {
                text: ` <div style="display: block;  line-height: 1.5;"><p  style="text-align: left;font-family:'Times New Roman', serif;" class="title">
 Billie Eilish</p></br></br><br><p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">Billie Eilish serves as a significant inspiration for my creative work. Her dark, melancholic music style, combined with deeply personal and introspective lyrics, resonates with me on both an emotional and artistic level. The way she translates complex emotions into haunting melodies has influenced my own approach to storytelling and expression.</br></br>
Her journey of embracing individuality and breaking conventional norms has also shaped my perspective, encouraging me to explore themes of vulnerability, authenticity, and introspection in my creations. Through her music and personal story, she has inspired me to push boundaries and craft a style that reflects my unique experiences and emotions.

          </p></div>`
            },
            { img: 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/Inspiration/inspiration.jpg' },
            {
                text: ` <div style="display: block;  line-height: 1.5;"><p  style="text-align: left;font-family:'Times New Roman', serif;" class="title">A person I adore</p></br></br></br>
            <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">She is the inspiration behind my creative works. Her unwavering support, kindness, and
            resilience motivate me, while her unique perspective on life compels me to view the world through new and
            transformative angles. The moments we shared in Japan, whether in the simplicity of daily routines or the
            excitement of unforgettable travels, have profoundly shaped my visual perspective, teaching me to find beauty
            in the ordinary.</br></br>
            Furthermore, her passion for the things she loves and her dedication to personal growth inspire me to pursue
            my own aspirations with the same fervor. Through my lens, I strive to capture the authenticity, warmth, and
            emotion she brings into my life—qualities that have become the driving force of my creativity.
          </p></div>`
            },
        ],
        // 新增项目数据
        newsroom: [
            { img: '', text: `<div style="display: block; line-height: 1.5;">
                <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Newsroom Project</p></br></br>
                <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
                ..............文字...............
                </p>
            </div>`},
            { img: '', text: `<div style="display: block; line-height: 1.5;">
                <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">News Article</p></br></br>
                <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
                ..............文字...............
                </p>
            </div>`}
        ],

        psa: [
            { img: '', text: `<div style="display: block; line-height: 1.5;">
                <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Public Service Announcement</p></br></br>
                <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
                ..............文字...............
                </p>
            </div>`},
            { video: '', text: `<div style="display: block; line-height: 1.5;">
                <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Public Service Announcement</p></br></br>
                <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
                ..............文字...............
                </p>
            </div>`}
        ],

        'course-reflection': [
            { text: `<div style="display: block; line-height: 1.5;">
                <p style="text-align: left;font-family:'Times New Roman', serif;" class="title">Course Reflection</p></br></br>
                <p style="text-align:left;font-family:'Times New Roman', serif;font-size: 18px">
                ..............文字...............
                </p>
            </div>`}
        ],
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
            document.getElementById('lt').style.display = 'none'
            document.getElementById('rt').style.display = 'none'
            document.getElementById('lt1').style.display = 'none'
            document.getElementById('rt1').style.display = 'none'
            document.getElementById('lt2').style.display = 'none'
            document.getElementById('rt2').style.display = 'none'
            document.getElementById('lt3').style.display = 'none'
            document.getElementById('rt3').style.display = 'none'
            document.getElementById('l-lt').style.display = 'none'
            document.getElementById('l-rt').style.display = 'none'

            document.getElementsByClassName('project1')[0].style.display = 'none'
            document.getElementsByClassName('project3')[0].style.display = 'none'
            document.getElementsByClassName('project5')[0].style.display = 'none'
            document.getElementsByClassName('project6')[0].style.display = 'none'
            document.getElementsByClassName('project2')[0].style.display = 'none'
            document.getElementsByClassName('project4')[0].style.display = 'none'
            document.getElementById('inspirations').style.display = 'none'
            document.getElementById('personal-info').style.display = 'none'
            // 隐藏新增页面
            document.getElementsByClassName('newsroom')[0].style.display = 'none'
            document.getElementsByClassName('psa')[0].style.display = 'none'
            document.getElementsByClassName('course-reflection')[0].style.display = 'none'
            document.getElementsByClassName('ctv')[0].style.display = 'none'
            
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
                initShow(id)
            } else {
                pictureCont.classList.toggle('hide')
                pictureContBox.classList.toggle('hide')
            }
            curShowProjectName = id
        }
    })
    aboutIem.forEach((el) => {

        el.onclick = (e) => {
            document.getElementById('lt').style.display = 'none'
            document.getElementById('rt').style.display = 'none'
            document.getElementById('lt1').style.display = 'none'
            document.getElementById('rt1').style.display = 'none'
            document.getElementById('lt2').style.display = 'none'
            document.getElementById('rt2').style.display = 'none'
            document.getElementById('lt3').style.display = 'none'
            document.getElementById('rt3').style.display = 'none'
            document.getElementById('l-lt').style.display = 'none'
            document.getElementById('l-rt').style.display = 'none'
            document.getElementsByClassName('project1')[0].style.display = 'none'
            document.getElementsByClassName('project3')[0].style.display = 'none'
            document.getElementsByClassName('project2')[0].style.display = 'none'
            document.getElementsByClassName('project5')[0].style.display = 'none'
            document.getElementsByClassName('project6')[0].style.display = 'none'
            document.getElementsByClassName('project4')[0].style.display = 'none'
            document.getElementById('inspirations').style.display = 'none'
            document.getElementById('personal-info').style.display = 'none'
            // 隐藏新增页面
            document.getElementsByClassName('newsroom')[0].style.display = 'none'
            document.getElementsByClassName('psa')[0].style.display = 'none'
            document.getElementsByClassName('course-reflection')[0].style.display = 'none'
            document.getElementsByClassName('ctv')[0].style.display = 'none'
            
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
        if (id === 'project6' || id === 'project3' || id === 'inspirations' || id === 'project1'
            || id === 'project5' || id === 'project2' || id === 'project4' || id === 'newsroom'
            || id === 'psa' || id === 'course-reflection' || id === 'personal-info' || id === 'ctv'
        ) {
            document.getElementsByClassName('left-icon')[0].style.display = 'none'
            document.getElementsByClassName('right-icon')[0].style.display = 'none'
            inspirationsBox.classList.add('hide')
            normalBox.classList.add('hide')


            if (id === 'project6') {
                document.getElementsByClassName('project6')[0].style.display = 'block'
            }
            if (id === 'project3') {
                document.getElementsByClassName('project3')[0].style.display = 'block'
                document.getElementById('lt').style.display = 'block'
                document.getElementById('rt').style.display = 'block'
            }
            if (id === 'inspirations') {
                document.getElementById('inspirations').style.display = 'block'
                document.getElementById('lt1').style.display = 'block'
                document.getElementById('rt1').style.display = 'block'
            }
            if (id === 'personal-info') {
                document.getElementById('personal-info').style.display = 'block'
                document.getElementById('lt2').style.display = 'block'
                document.getElementById('rt2').style.display = 'block'
            }
            if (id === 'project1') {
                document.getElementsByClassName('project1')[0].style.display = 'block'
            }
            if (id === 'project5'){
                document.getElementsByClassName('project5')[0].style.display = 'block'
            }
            if (id === 'project2'){
                document.getElementById('l-lt').style.display = 'block'
                document.getElementById('l-rt').style.display = 'block'
                document.getElementsByClassName('project2')[0].style.display = 'block'
            }
            if (id === 'project4'){
                document.getElementsByClassName('project4')[0].style.display = 'block'
            }
            if (id === 'newsroom'){
                document.getElementById('lt3').style.display = 'block'
                document.getElementById('rt3').style.display = 'block'
                document.getElementsByClassName('newsroom')[0].style.display = 'block'

            }
            if (id === 'psa'){
                document.getElementsByClassName('psa')[0].style.display = 'block'
            }
            if (id === 'course-reflection'){
                document.getElementsByClassName('course-reflection')[0].style.display = 'block'
            }
            if (id === 'ctv'){
                document.getElementsByClassName('ctv')[0].style.display = 'block'
            }

            return
        } else {
            document.getElementsByClassName('project6')[0].style.display = 'none'
            document.getElementsByClassName('project3')[0].style.display = 'none'
            document.getElementsByClassName('newsroom')[0].style.display = 'none'
            document.getElementsByClassName('psa')[0].style.display = 'none'
            document.getElementsByClassName('course-reflection')[0].style.display = 'none'
            document.getElementsByClassName('ctv')[0].style.display = 'none'
        }
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
            if (curData.length > 1) {
                document.getElementsByClassName('left-icon')[0].style.display = 'block'
                document.getElementsByClassName('right-icon')[0].style.display = 'block'
            }
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

});
const scanLine = document.getElementById('scanLine');
const mainCanvas = document.getElementById('mainCanvas');
const freezeCanvas = document.getElementById('freezeCanvas');
const ctx = mainCanvas.getContext('2d');
const freezeCtx = freezeCanvas.getContext('2d');

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = 650;
const IMG_WIDTH = 650;

let scanPosition = 0;
let isScanning = true;
let isPaused = false;
const img = new Image();
img.src = 'https://my-oss-test-hjw.oss-cn-beijing.aliyuncs.com/assets/folio/tao.png';
let mouseX = CANVAS_WIDTH / 2; // 初始位置设为画布中心
let mouseY = CANVAS_HEIGHT / 2;
let isDragging = false; // 新增标志位，表示是否正在拖动

function initCanvas() {
    mainCanvas.width = freezeCanvas.width = CANVAS_WIDTH;
    mainCanvas.height = freezeCanvas.height = CANVAS_HEIGHT;
}

function draw() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(freezeCanvas, 0, 0);

    ctx.save();
    ctx.imageSmoothingEnabled = false;

    ctx.beginPath();
    ctx.rect(0, scanPosition, CANVAS_WIDTH, CANVAS_HEIGHT - scanPosition);
    ctx.clip();

    const imgHeight = img.height * (IMG_WIDTH / img.width);
    ctx.drawImage(
        img,
        mouseX - IMG_WIDTH/2,
        mouseY - imgHeight/2,
        IMG_WIDTH,
        imgHeight
    );
    ctx.restore();

    if(isScanning) {
        ctx.beginPath();
        ctx.moveTo(0, scanPosition);
        ctx.lineTo(CANVAS_WIDTH, scanPosition);
        ctx.strokeStyle = 'rgba(255,255,255,0)';
        ctx.lineWidth = 2;
        ctx.stroke();

        scanLine.style.transform = `translateY(${scanPosition}px)`;
    }
}

function updateScanLine() {
    if(isScanning && !isPaused) {
        scanPosition += 1;
        if(scanPosition > CANVAS_HEIGHT) {
            isScanning = false;
            isPaused = true;
            setTimeout(() => {
                scanLine.style.transform = `translateY(0)`;
                freezeCtx.fillStyle = 'black';
                freezeCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                isScanning = true;
                isPaused = false;
                scanPosition = 0;
            }, 3000);
        }
    }
}

function freezeContent() {
    freezeCtx.globalCompositeOperation = 'copy';
    freezeCtx.drawImage(
        mainCanvas,
        0, 0,
        CANVAS_WIDTH, scanPosition,
        0, 0,
        CANVAS_WIDTH, scanPosition
    );
    freezeCtx.globalCompositeOperation = 'source-over';
}

function initA() {
    initCanvas();

    function getCanvasPosition(e) {
        const rect = mainCanvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    }

    // 鼠标按下事件
    window.addEventListener('mousedown', (e) => {
        isDragging = true;
        getCanvasPosition(e);
    });

    // 鼠标移动事件 - 只在拖动时更新位置
    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            getCanvasPosition(e);
        }
    });

    // 鼠标释放事件
    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // 鼠标离开画布时停止拖动
    window.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    function animate() {
        updateScanLine();
        if(!isPaused) freezeContent();
        draw();
        requestAnimationFrame(animate);
    }
    animate();
}
document.querySelector('.demo').classList.add('fade-out');

setTimeout(() => {
    document.querySelector('.demo').style.display = 'none';
    document.getElementsByClassName('canvas-container')[0].style.display = 'block';
    initA();
    }, 3000);