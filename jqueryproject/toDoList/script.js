$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        const task = $('#task-input').val();

        $('#task-list').append(`
            <li>${task}</li>
        `);

        $('#task-input').val('');
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});