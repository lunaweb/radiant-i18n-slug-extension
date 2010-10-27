var slugify = function(str, replace){
    var pattern = [
        new RegExp('Ç', 'g'),
        new RegExp('ç', 'g'),
        new RegExp('[üûúù]', 'g'),
        new RegExp('[éêëè]', 'g'),
        new RegExp('[âäàåá]', 'g'),
        new RegExp('[ïîìí]', 'g'),
        new RegExp('[ÄÅ]', 'g'),
        new RegExp('É', 'g'),
        new RegExp('æ', 'g'),
        new RegExp('Æ', 'g'),
        new RegExp('[ôöòó]', 'g'),
        new RegExp('Ü', 'g'),
        new RegExp('ÿ', 'g'),
        new RegExp('Ö', 'g'),
        new RegExp('ñ', 'g'),
        new RegExp('Ñ', 'g')
    ];
    var repl = ['C', 'c', 'u', 'e', 'a', 'i', 'A', 'E', 'ae', 'Ae', 'o', 'U', 'y', 'O', 'n', 'N'];

    for (var i=0; i<pattern.length; i++) {
        str = str.replace(pattern[i], repl[i]);
    }
    
    return str;
};

Object.extend(String.prototype, {
  toSlug: function() {
	var slug = slugify(this.strip().downcase());
	slug = slug.replace(/[^-a-z0-9~_]/g, '-').replace(/-+/g, '-').replace(/^-/, '').replace(/-$/, '');
    return slug;
  }
});