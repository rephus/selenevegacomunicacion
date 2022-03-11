(function(t,a,l,k,j,s){

    if (!window.location.host) {
        console.log('Disabling talkjs on local instance')
        return
    }
    s=a.createElement('script');s.async=1;s.src="https://cdn.talkjs.com/talk.js";a.getElementsByTagName('head')[0].appendChild(s);k=t.Promise
    t.Talk={ready:{then:function(f){if(k)return new k(function(r,e){l.push([f,r,e])});l.push([f])},catch:function(){return k&&new k()},c:l}}
    })(window,document,[]);

    function uuidv4() {
        var crypto = window.crypto;
        var randomByte = crypto
            ? function () { return (crypto.getRandomValues(new Uint8Array(1)))[0]; }
            : function () { return Math.floor(Math.random() * 255); };
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
            return (c ^ randomByte() & 15 >> c / 4).toString(16);
        });
    }

    Talk.ready.then(function() {
        // The core TalkJS lib has loaded, so let's identify the current user to TalkJS.
        
        var userId = uuidv4();
        console.log("User id " + userId); 
        var me = new Talk.User({
            id: userId,
            name:  'Visitor',
            role: 'visitor'
        });
    
        var admin = new Talk.User({
            // must be any value that uniquely identifies this user
            id: "1",
            name: "Javier Rengel",
            email: "javier@rengel.me",
            photoUrl: "https://rephus.github.io/CV/public/images/photo.jpg",
            role: "admin", 
            welcomeMessage: "Hey there! if you want to get in touch leave your contact details and I will respond to you as soon as possible!"
        });
        window.talkSession = new Talk.Session({
            appId: "tbngc5jz",
            me: me
        });

        var conversation = window.talkSession.getOrCreateConversation("conv-" + userId);
        conversation.setParticipant(me);
        conversation.setParticipant(admin);
        conversation.setAttributes({
            subject: "Get in touch",
            photoUrl: "https://rephus.github.io/CV/public/images/photo.jpg"
        })

        var popup = talkSession.createPopup(conversation,{
            keepOpen: false,
            launcher: "always"
        });
        popup.mount({ show: false });
       
    });