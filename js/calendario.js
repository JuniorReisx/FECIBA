document.addEventListener('DOMContentLoaded', function() {
    const calendarGrid = document.querySelector('.calendar-grid');
    const monthYear = document.getElementById('month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    let currentDate = new Date();

    function renderCalendar() {
        calendarGrid.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        
        monthYear.textContent = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyCell = document.createElement('div');
            calendarGrid.appendChild(emptyCell);
        }

        for (let date = 1; date <= lastDateOfMonth; date++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('day');
            dayCell.innerHTML = `<div class="date">${date}</div>`;

            
            const events = getEventsForDate(year, month, date);
            events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.classList.add('event');
                eventElement.textContent = event;
                dayCell.appendChild(eventElement);
            });

            calendarGrid.appendChild(dayCell);
        }
    }

    function getEventsForDate(year, month, date) {
        const events = {
            "2024-06-15": ["Mutirão de Limpeza - Projeto Tamar"],
            "2024-06-18": ["Palestra de Reciclagem - Instituto Reciclar"],
            "2024-06-21": ["Oficina de Compostagem - SOS Mata Atlântica"],
            "2024-06-25": ["Plantio de Árvores - Amigos da Terra"],
            "2024-06-28": ["Workshop de Reutilização - Instituto Lixo Zero Brasil"],
            "2024-07-05": ["Dia do Descarte Consciente - Greenpeace Brasil"]
        };
        const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
        return events[key] || [];
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});