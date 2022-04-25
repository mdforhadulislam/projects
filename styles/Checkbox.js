import StyleSheet from "./Checkbox.module.css";

export function MemberCheckbox({ name, title, actions, value }) {
    return (
        <div className={StyleSheet.checkboxs__container}>
            <div className={StyleSheet.checkboxs__container__input}>
                <input
                    type="checkbox"
                    name={name && name}
                    id={name && name}
                    onChange={(e) => {
                        actions(e.target.checked);
                    }}
                />
                <label
                    htmlFor={name && name}
                    className={value ? StyleSheet.checked : StyleSheet.unchecked}>
                    {title}
                </label>
            </div>
        </div>
    );
}