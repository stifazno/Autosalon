
document.getElementById('colorFilter').addEventListener('change', function() {
    filterElements();
});


document.getElementById('brandFilter').addEventListener('change', function() {
    filterElements();
});

function filterElements() {
  
    var filterColor = document.getElementById('colorFilter').value;
    var filterBrand = document.getElementById('brandFilter').value;

    
    var containers = document.querySelectorAll('[class^="container"]');

    containers.forEach(function(container) {
        var containerColor = container.getAttribute('data-color');
        var containerBrand = container.getAttribute('data-brand');

        
        if (
            (filterColor === 'all' || containerColor === filterColor) &&
            (filterBrand === 'All' || containerBrand === filterBrand)
        ) {
           
            container.style.display = 'block';
        } else {
          
            container.style.display = 'none';
        }
    });
}
