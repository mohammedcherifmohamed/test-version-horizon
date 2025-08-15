fetch('/lessons.json')
    .then(res => res.json())
    .then(courses => {
        const container = document.getElementById('courses-container');
        const buttons = document.querySelectorAll('.filter-btn');

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

        displayCourses(courses);

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
                btn.classList.add('bg-blue-600', 'text-white');
                const subject = btn.dataset.subject;
                if (subject === 'all') {
                    displayCourses(courses);
                } else {
                    displayCourses(courses.filter(c => c.subject === subject));
                }
            });
        });
    });