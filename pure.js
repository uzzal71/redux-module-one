const state = {
    valud: 5,
};

function impure() {
    state.value = 6;
}

impure();