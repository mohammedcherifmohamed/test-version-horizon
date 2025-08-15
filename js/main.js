// main.js
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('lessons-container')) {
        fetch('../lessons.json')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('lessons-container');
                
                // Get only first 6 lessons
                const limitedLessons = data.slice(0, 6);

                limitedLessons.forEach(lesson => {
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
            });
    }
});
