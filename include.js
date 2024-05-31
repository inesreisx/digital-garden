<!-- include.js -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('[data-include]');
        elements.forEach(el => {
            fetch(el.getAttribute('data-include'))
                .then(response => response.text())
                .then(data => {
                    el.innerHTML = data;
                });
        });
    });
</script>