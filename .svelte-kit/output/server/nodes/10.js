

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/obedience/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.RBcn971s.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js"];
export const stylesheets = [];
export const fonts = [];
