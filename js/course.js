document.addEventListener('DOMContentLoaded', function() {
    // Get current language from localStorage or default to English
    const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    const isRTL = currentLanguage === 'ar';

    // Get the course ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    if (!courseId) {
        window.location.href = 'index.html';
        return;
    }

    // Translations for this page
    const translations = {
        en: {
            course_not_found: "Course Not Found",
            not_found_message: "The requested course could not be found.",
            back_to_courses: "Back to Courses",
            course_description: "Course Description",
            instructor: "Instructor",
            what_youll_learn: "What You'll Learn",
            master_concepts: "Master key concepts in",
            problem_solving: "Develop problem-solving skills",
            feedback: "Receive personalized feedback",
            confidence: "Build confidence in the subject",
            enroll_now: "Enroll Now",
            specialist: "Specialist",
            no_related_courses: "No related courses found.",
            error_loading: "Error Loading Course",
            error_message: "There was an error loading the course details. Please try again later.",
            view_details: "View Details"
        },
        fr: {
            course_not_found: "Cours Introuvable",
            not_found_message: "Le cours demandé n'a pas pu être trouvé.",
            back_to_courses: "Retour aux Cours",
            course_description: "Description du Cours",
            instructor: "Instructeur",
            what_youll_learn: "Ce Que Vous Allez Apprendre",
            master_concepts: "Maîtriser les concepts clés en",
            problem_solving: "Développer des compétences en résolution de problèmes",
            feedback: "Recevoir des commentaires personnalisés",
            confidence: "Renforcer la confiance dans la matière",
            enroll_now: "S'inscrire Maintenant",
            specialist: "Spécialiste",
            no_related_courses: "Aucun cours connexe trouvé.",
            error_loading: "Erreur de Chargement du Cours",
            error_message: "Une erreur s'est produite lors du chargement des détails du cours. Veuillez réessayer plus tard.",
            view_details: "Voir les Détails"
        },
        ar: {
            course_not_found: "الدورة غير موجودة",
            not_found_message: "لم يتم العثور على الدورة المطلوبة.",
            back_to_courses: "العودة إلى الدورات",
            course_description: "وصف الدورة",
            instructor: "المدرب",
            what_youll_learn: "ما سوف تتعلمه",
            master_concepts: "إتقان المفاهيم الأساسية في",
            problem_solving: "تطوير مهارات حل المشكلات",
            feedback: "تلقي ملاحظات شخصية",
            confidence: "بناء الثقة في الموضوع",
            enroll_now: "سجل الآن",
            specialist: "متخصص",
            no_related_courses: "لم يتم العثور على دورات ذات صلة.",
            error_loading: "خطأ في تحميل الدورة",
            error_message: "حدث خطأ أثناء تحميل تفاصيل الدورة. يرجى المحاولة مرة أخرى لاحقًا.",
            view_details: "عرض التفاصيل"
        }
    };

    // Load the course details
    fetch('lessons.json')
        .then(response => response.json())
        .then(data => {
            const course = data.lessons.find(lesson => lesson.id == courseId);
            const courseDetails = document.getElementById('course-details');
            const relatedCoursesContainer = document.getElementById('related-courses');

            if (!course) {
                courseDetails.innerHTML = `
                    <div class="p-8 text-center" ${isRTL ? 'dir="rtl"' : ''}>
                        <h2 class="text-2xl font-bold text-red-500 mb-4">${translations[currentLanguage].course_not_found}</h2>
                        <p class="mb-4">${translations[currentLanguage].not_found_message}</p>
                        <a href="index.html" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">${translations[currentLanguage].back_to_courses}</a>
                    </div>
                `;
                return;
            }

            // Set document direction for Arabic
            if (isRTL) {
                document.documentElement.dir = 'rtl';
                document.documentElement.lang = 'ar';
            }

            // Display course details
            courseDetails.innerHTML = `
                <div class="md:flex ${isRTL ? 'flex-row-reverse' : ''}">
                    <div class="md:w-1/3 bg-blue-600 text-white p-8">
                        <div class="mb-6">
                            <span class="inline-block px-3 py-1 text-sm font-semibold bg-blue-700 rounded-full mb-2">${course.subject}</span>
                            <h2 class="text-2xl font-bold mb-2">${course.title}</h2>
                            <div class="text-3xl font-bold mb-4">${course.price} DZ</div>
                            <div class="flex items-center mb-1 ${isRTL ? 'flex-row-reverse' : ''}">
                                <i class="far fa-clock ${isRTL ? 'ml-2' : 'mr-2'}"></i>
                                <span>${course.duration}</span>
                            </div>
                            <div class="flex items-center mb-1 ${isRTL ? 'flex-row-reverse' : ''}">
                                <i class="fas fa-user-graduate ${isRTL ? 'ml-2' : 'mr-2'}"></i>
                                <span>${course.level}</span>
                            </div>
                            <div class="flex items-center ${isRTL ? 'flex-row-reverse' : ''}">
                                <i class="far fa-calendar-alt ${isRTL ? 'ml-2' : 'mr-2'}"></i>
                                <span>${course.schedule}</span>
                            </div>
                        </div>
                        <a href="contact.html?subject=Enrollment%20for%20${encodeURIComponent(course.title)}" class="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 mt-6">
                            ${translations[currentLanguage].enroll_now}
                        </a>
                    </div>
                    <div class="md:w-2/3 p-8" ${isRTL ? 'dir="rtl"' : ''}>
                        <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4 text-gray-800">${translations[currentLanguage].course_description}</h3>
                            <p class="text-gray-600">${course.description}</p>
                        </div>
                        <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4 text-gray-800">${translations[currentLanguage].instructor}</h3>
                            <div class="flex items-center ${isRTL ? 'flex-row-reverse' : ''}">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 ${isRTL ? 'ml-4' : 'mr-4'}">
                                    <i class="fas fa-user text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">${course.instructor}</h4>
                                    <p class="text-gray-600 text-sm">${course.subject} ${translations[currentLanguage].specialist}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4 text-gray-800">${translations[currentLanguage].what_youll_learn}</h3>
                            <ul class="space-y-3">
                                <li class="flex items-start ${isRTL ? 'flex-row-reverse' : ''}">
                                    <i class="fas fa-check text-green-500 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}"></i>
                                    <span class="text-gray-600">${translations[currentLanguage].master_concepts} ${course.subject.toLowerCase()}</span>
                                </li>
                                <li class="flex items-start ${isRTL ? 'flex-row-reverse' : ''}">
                                    <i class="fas fa-check text-green-500 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}"></i>
                                    <span class="text-gray-600">${translations[currentLanguage].problem_solving}</span>
                                </li>
                                <li class="flex items-start ${isRTL ? 'flex-row-reverse' : ''}">
                                    <i class="fas fa-check text-green-500 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}"></i>
                                    <span class="text-gray-600">${translations[currentLanguage].feedback}</span>
                                </li>
                                <li class="flex items-start ${isRTL ? 'flex-row-reverse' : ''}">
                                    <i class="fas fa-check text-green-500 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}"></i>
                                    <span class="text-gray-600">${translations[currentLanguage].confidence}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;

            // Display related courses (filter by subject, exclude current course)
            const relatedCourses = data.lessons.filter(
                lesson => lesson.subject === course.subject && lesson.id != course.id
            ).slice(0, 3);

            if (relatedCourses.length > 0) {
                relatedCoursesContainer.innerHTML = ''; // Clear previous content
                relatedCourses.forEach(lesson => {
                    const lessonCard = document.createElement('div');
                    lessonCard.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1';
                    lessonCard.innerHTML = `
                        <div class="p-6" ${isRTL ? 'dir="rtl"' : ''}>
                            <div class="flex justify-between items-start">
                                <span class="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">${lesson.subject}</span>
                                <span class="text-gray-600 text-sm">${lesson.duration}</span>
                            </div>
                            <h3 class="text-xl font-bold mt-2 mb-3">${lesson.title}</h3>
                            <p class="text-gray-600 mb-4 line-clamp-2">${lesson.description}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-blue-600">${lesson.price} DZ</span>
                                <a href="course.html?id=${lesson.id}" class="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                                    ${translations[currentLanguage].view_details} <i class="fas fa-arrow-${isRTL ? 'left' : 'right'} ${isRTL ? 'mr-2' : 'ml-2'}"></i>
                                </a>
                            </div>
                        </div>
                    `;
                    relatedCoursesContainer.appendChild(lessonCard);
                });
            } else {
                relatedCoursesContainer.innerHTML = `
                    <p class="text-center text-gray-500 col-span-3" ${isRTL ? 'dir="rtl"' : ''}>${translations[currentLanguage].no_related_courses}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error loading course details:', error);
            const courseDetails = document.getElementById('course-details');
            courseDetails.innerHTML = `
                <div class="p-8 text-center" ${isRTL ? 'dir="rtl"' : ''}>
                    <h2 class="text-2xl font-bold text-red-500 mb-4">${translations[currentLanguage].error_loading}</h2>
                    <p class="mb-4">${translations[currentLanguage].error_message}</p>
                    <a href="index.html" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">${translations[currentLanguage].back_to_courses}</a>
                </div>
            `;
        });

    // Mobile menu toggle (repeated from main.js for standalone functionality)
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});