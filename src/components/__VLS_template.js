import Search from './Search.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, products, formatPrice, currentPage, prevPage, totalPages, nextPage } from "./ProductList.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Search', typeof __VLS_localComponents, "Search", "Search", "Search">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.Search;
// @ts-ignore
[Search,];
__VLS_intrinsicElements.img;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.hr;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("container w-max p-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("container w-max p-12"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'Search' extends keyof typeof __VLS_ctx ? { 'Search': typeof __VLS_ctx.Search; } : typeof __VLS_resolvedLocalAndGlobalComponents).Search;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { Search: typeof __VLS_5; }).Search;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("product-container mt-8 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("product-container mt-8 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products)!)) {
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, key: ((product.id)), class: ("product-item w-full rounded-xl border-gray-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, key: ((product.id)), class: ("product-item w-full rounded-xl border-gray-50"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("product-frame w-full h-full bg-white rounded-lg shadow-md hover:shadow-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("product-frame w-full h-full bg-white rounded-lg shadow-md hover:shadow-lg"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["img"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, src: ((product.urlImg)), alt: ("Product Image"), class: ("product-image object-cover rounded-t-xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, src: ((product.urlImg)), alt: ("Product Image"), class: ("product-image object-cover rounded-t-xl"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
({ 'highlighted-product': product.id === 'idOfHighlightedProduct' });
}
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, class: ("product-details p-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("product-details p-2"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = __VLS_intrinsicElements["div"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, class: ("product-header flex justify-between items-center mb-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, class: ("product-header flex justify-between items-center mb-2"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = __VLS_intrinsicElements["h2"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, class: ("product-title text-sm font-semibold clamp-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("product-title text-sm font-semibold clamp-2"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(product.name);
(__VLS_43.slots!).default;
}
{
const __VLS_45 = __VLS_intrinsicElements["div"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, class: ("badge text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("badge text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
(__VLS_48.slots!).default;
}
{
const __VLS_50 = __VLS_intrinsicElements["hr"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
}
(__VLS_38.slots!).default;
}
{
const __VLS_55 = __VLS_intrinsicElements["div"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{}, class: ("flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
for (const [star] of __VLS_getVForSourceType((Array.from({ length: 5 }, (_, index) => index + 1))!)) {
{
const __VLS_60 = __VLS_intrinsicElements["span"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{}, key: ((star)), class: ("text-yellow-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, key: ((star)), class: ("text-yellow-500"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
(star <= Math.round(product.rate) ? '⭐' : '☆');
(__VLS_63.slots!).default;
}
// @ts-ignore
[products,];
}
(__VLS_58.slots!).default;
}
{
const __VLS_65 = __VLS_intrinsicElements["p"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, class: ("original-price"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, class: ("original-price"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_ctx.formatPrice(product.price));
(__VLS_68.slots!).default;
}
{
const __VLS_70 = __VLS_intrinsicElements["a"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{}, href: ((product.urlproduct)), target: ("_blank"), class: ("product-link text-blue-500 hover:underline"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, href: ((product.urlproduct)), target: ("_blank"), class: ("product-link text-blue-500 hover:underline"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
(__VLS_73.slots!).default;
}
(__VLS_33.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
// @ts-ignore
[formatPrice,];
}
(__VLS_13.slots!).default;
}
{
const __VLS_75 = __VLS_intrinsicElements["div"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, class: ("pagination mt-4 flex justify-center items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, class: ("pagination mt-4 flex justify-center items-center"), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
{
const __VLS_80 = __VLS_intrinsicElements["button"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{ onClick: {} as any, }, disabled: ((__VLS_ctx.currentPage === 1)), class: ("page-button px-4 py-2 rounded-md bg-blue-500 text-white mr-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, disabled: ((__VLS_ctx.currentPage === 1)), class: ("page-button px-4 py-2 rounded-md bg-blue-500 text-white mr-2"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
let __VLS_85 = { 'click': __VLS_pickEvent(__VLS_84['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_82>).onClick) };
__VLS_85 = { click: (__VLS_ctx.prevPage) };
(__VLS_83.slots!).default;
}
{
const __VLS_86 = __VLS_intrinsicElements["span"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
const __VLS_88 = __VLS_87({ ...{}, class: ("current-page"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, class: ("current-page"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
(__VLS_ctx.currentPage);
(__VLS_89.slots!).default;
}
{
const __VLS_91 = __VLS_intrinsicElements["button"];
const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
const __VLS_93 = __VLS_92({ ...{ onClick: {} as any, }, disabled: ((__VLS_ctx.currentPage === __VLS_ctx.totalPages)), class: ("page-button px-4 py-2 rounded-md bg-blue-500 text-white ml-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, disabled: ((__VLS_ctx.currentPage === __VLS_ctx.totalPages)), class: ("page-button px-4 py-2 rounded-md bg-blue-500 text-white ml-2"), });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
let __VLS_96 = { 'click': __VLS_pickEvent(__VLS_95['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_93>).onClick) };
__VLS_96 = { click: (__VLS_ctx.nextPage) };
(__VLS_94.slots!).default;
}
(__VLS_78.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[currentPage, currentPage, prevPage, currentPage, currentPage, totalPages, currentPage, totalPages, nextPage,];
return __VLS_slots;
}
