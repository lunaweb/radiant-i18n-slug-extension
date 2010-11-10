var slugify = function(str){
  
    var items = {
      'Ç'       : 'C',
      'ç'       : 'c',
      '[ûúù]'   : 'u',
      '[éêëè]'  : 'e',
      '[âàåá]'  : 'a',
      '[ïîìí]'  : 'i',
      '[Å]'     : 'A',
      'É'       : 'E',
      'æ'       : 'ae',
      'Æ'       : 'Ae',
      '[ôòó]'   : 'o',
      'Ä'       : 'Ae',
      'Ö'       : 'Oe',
      'Ü'       : 'Ue',
      'ä'       : 'ae',
      'ö'       : 'oe',
      'ü'       : 'ue',
      'ß'       : 'ss',
      'ÿ'       : 'y',
      'Ö'       : 'O',
      'ñ'       : 'n',
      'Ñ'       : 'N'
    };
    
    for(var index in items) {
      str = str.replace(new RegExp(index, 'g'), items[index]);
    }
    
    return str;
};

Object.extend(String.prototype, {
  toSlug: function() {
    var slug = slugify(this.strip().downcase());
    return slug.replace(/[^-a-z0-9~_]/g, '-').replace(/-+/g, '-').replace(/^-/, '').replace(/-$/, '');
  }
});