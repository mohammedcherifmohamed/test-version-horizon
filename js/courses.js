const lessons = [
    {
        "id": 1,
        "title": "Mathematics Fundamentals",
        "subject": "Mathematics",
        "description": "This course covers the fundamental concepts of mathematics including arithmetic, algebra, and geometry. Perfect for students who need to strengthen their basic math skills.",
        "duration": "1 hour",
        "price": 25,
        "learningPoints": [
            "Master basic arithmetic operations",
            "Understand algebraic expressions",
            "Solve geometry problems",
            "Develop problem-solving skills"
        ],
        "requirements": "Basic understanding of numbers"
    },
    {
        "id": 2,
        "title": "Advanced Calculus",
        "subject": "Mathematics",
        "description": "Dive deep into calculus concepts including limits, derivatives, and integrals. This course is designed for high school and college students.",
        "duration": "1.5 hours",
        "price": 35,
        "learningPoints": [
            "Understand limits and continuity",
            "Master differentiation techniques",
            "Learn integration methods",
            "Apply calculus to real-world problems"
        ],
        "requirements": "Pre-calculus knowledge"
    },
    {
        "id": 3,
        "title": "General Science",
        "subject": "Science",
        "description": "Comprehensive coverage of physics, chemistry, and biology concepts. Ideal for students preparing for standardized tests.",
        "duration": "1 hour",
        "price": 30,
        "learningPoints": [
            "Understand scientific principles",
            "Learn laboratory techniques",
            "Develop critical thinking skills",
            "Prepare for science exams"
        ],
        "requirements": "Basic science knowledge"
    },
    {
        "id": 4,
        "title": "World History",
        "subject": "History",
        "description": "Explore major events and civilizations throughout world history. This course provides context and analysis of historical developments.",
        "duration": "1 hour",
        "price": 25,
        "learningPoints": [
            "Understand historical timelines",
            "Analyze cause and effect in history",
            "Study different civilizations",
            "Develop historical perspective"
        ],
        "requirements": "None"
    },
    {
        "id": 5,
        "title": "English Conversation",
        "subject": "English",
        "description": "Improve your English speaking and listening skills through guided conversations and practical exercises.",
        "duration": "1 hour",
        "price": 20,
        "learningPoints": [
            "Improve pronunciation",
            "Expand vocabulary",
            "Develop fluency",
            "Practice real-life conversations"
        ],
        "requirements": "Basic English knowledge"
    },
    {
        "id": 6,
        "title": "Business English",
        "subject": "English",
        "description": "Learn English for professional settings including meetings, presentations, and business correspondence.",
        "duration": "1.5 hours",
        "price": 35,
        "learningPoints": [
            "Master business vocabulary",
            "Practice professional communication",
            "Learn email etiquette",
            "Prepare for interviews"
        ],
        "requirements": "Intermediate English level"
    }
    ,
    {
        "id": 6,
        "title": "Business English",
        "subject": "English",
        "description": "Learn English for professional settings including meetings, presentations, and business correspondence.",
        "duration": "1.5 hours",
        "price": 35,
        "learningPoints": [
            "Master business vocabulary",
            "Practice professional communication",
            "Learn email etiquette",
            "Prepare for interviews"
        ],
        "requirements": "Intermediate English level"
    },
    {
        "id": 6,
        "title": "Business English",
        "subject": "English",
        "description": "Learn English for professional settings including meetings, presentations, and business correspondence.",
        "duration": "1.5 hours",
        "price": 35,
        "learningPoints": [
            "Master business vocabulary",
            "Practice professional communication",
            "Learn email etiquette",
            "Prepare for interviews"
        ],
        "requirements": "Intermediate English level"
    },
    {
        "id": 6,
        "title": "Business English",
        "subject": "English",
        "description": "Learn English for professional settings including meetings, presentations, and business correspondence.",
        "duration": "1.5 hours",
        "price": 35,
        "learningPoints": [
            "Master business vocabulary",
            "Practice professional communication",
            "Learn email etiquette",
            "Prepare for interviews"
        ],
        "requirements": "Intermediate English level"
    }
];

// Run only after HTML is ready
document.addEventListener('DOMContentLoaded', function() { 
    const container = document.getElementById('courses-container');
    const buttons = document.querySelectorAll('.filter-btn');

    if (!container) return; // Stop if container doesn't exist

    function displayCourses(list) { 
        container.innerHTML = ''; 
        list.forEach(course => { 
            container.innerHTML += ` 
                <div class="bg-white rounded-lg shadow-md p-6"> 
                    <div class="flex justify-between mb-2"> 
                        <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">${course.subject}</span> 
                        <span class="text-gray-600 text-sm">${course.duration}</span> 
                    </div> 
                    <h3 class="text-xl font-semibold mb-2">${course.title}</h3> 
                    <p class="text-gray-600 mb-4">${course.description}</p> 
                    <div class="flex justify-between items-center"> 
                        <span class="text-blue-600 font-bold">$${course.price}</span> 
                        <a href="course.html?id=${course.id}" class="text-blue-600 hover:text-blue-800">View Details</a> 
                    </div> 
                </div> 
            `; 
        }); 
    }

    // Show all courses on load
    displayCourses(lessons); 

    // Filter buttons
    buttons.forEach(btn => { 
        btn.addEventListener('click', () => { 
            buttons.forEach(b => b.classList.remove('bg-blue-600', 'text-white')); 
            btn.classList.add('bg-blue-600', 'text-white'); 
            const subject = btn.dataset.subject; 
            if (subject === 'all') { 
                displayCourses(lessons); 
            } else { 
                displayCourses(lessons.filter(c => c.subject === subject)); 
            } 
        }); 
    });
});
