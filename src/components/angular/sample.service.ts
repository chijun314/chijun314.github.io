export class SampleService {
    private sample: string = '';

    set(val: string) {
        this.sample = val;
    }

    get() {
        return this.sample;
    }
}