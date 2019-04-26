import Mixin from '@ember/object/mixin';
import { A } from '@ember/array';
import { next } from '@ember/runloop';

export default Mixin.create({
    children: null,

    init() {
        this._super(...arguments);
        this.set('children', A());
    },

    registerChild(child: object) {
        next(this, function () {
            this.get('children' as any).addObject(child);
        });
    },

    removeChild(child: object) {
        this.get('children' as any).removeObject(child);
    }
});
