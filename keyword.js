function searchKeywords() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase(); // Get the entered keyword and convert to lowercase for case-insensitive search
  
    // Perform your search logic here, for example:
    if (searchInput === 'keyword1') {
      alert('Keyword 1 found!');
      // Perform actions if keyword 1 is found
    } else if (searchInput === 'keyword2') {
      alert('Keyword 2 found!');
      // Perform actions if keyword 2 is found
    } else {
      alert('Keyword not found!');
      // Handle cases where the keyword is not found
    }
  }