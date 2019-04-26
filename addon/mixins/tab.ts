import Mixin from '@ember/object/mixin';

export default Mixin.create({
    _didRegister: false,

    _registerWithParent() {
        if (!(this._didRegister)) {
            let parent = this.get('parent' as any);
            if (parent) {
                parent.registerChild(this);
                this._didRegister = true;
            }
        }
    },

    _unregisterFromParent() {
        let parent = this.get('parent' as any);
        if (this._didRegister && parent) {
            parent.removeChild(this);
            this._didRegister = false;
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);
        this._registerWithParent();
    },

    willRender() {
        this._super(...arguments);
        this._registerWithParent();
    },

    willDestroyElement() {
        this._super(...arguments);
        this._registerWithParent();
    }
});
