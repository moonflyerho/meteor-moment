Package.describe({
    name: 'rzymek:moment-locale-{{locale}}',
    summary: "Moment.js {{locale}} locale. Companion package for rzymek:moment",
    version: "2.9.0",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('momentjs:moment@2.9.0'); 
    api.addFiles('server.js','server');
    api.addFiles('client.js','client');
    api.addFiles('locale.js');
    api.imply('momentjs:moment');
});
