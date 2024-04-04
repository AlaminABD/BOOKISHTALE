document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the search query
    var searchQuery = document.getElementById('search-input').value.trim();

    // You can now use the searchQuery to implement your search functionality
    // For example, you can send an AJAX request to a server to fetch search results
    // and display them on the page.
});
