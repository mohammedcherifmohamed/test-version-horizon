
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

// Load lessons from JSON and display them
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('lessons-container')) {
    
                const container = document.getElementById('lessons-container');
                
                lessons.slice(0, 6).forEach(lesson => {
                    const lessonCard = document.createElement('div');
                    lessonCard.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1';
                    lessonCard.innerHTML = `
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <span class="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">${lesson.subject}</span>
                                <span class="text-gray-600 text-sm">${lesson.duration}</span>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">${lesson.title}</h3>
                            <p class="text-gray-600 mb-4 line-clamp-2">${lesson.description}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-blue-600 font-bold">$${lesson.price}</span>
                                <a href="course.html?id=${lesson.id}" class="text-blue-600 hover:text-blue-800 font-medium" data-i18n="view_details">View Details</a>
                            </div>
                        </div>
                    `;
                    container.appendChild(lessonCard);
                });
            }
});
