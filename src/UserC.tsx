import React, {FC, memo} from 'react';

const UserC: FC<{ foo: () => void, arr: number[], item?: any }> = memo(({foo, arr,  item}) => { //за доп цього не буде рендеритись якщо не буде змінюватись (не будуть приходити ніякі пропси)
    // використовувати тільки за умови що компонент дуууже важкий
    console.log('user');
foo();
    console.log(arr);
    return (
        <div>
            user
            {item.name}
        </div>
    );
});

export default UserC;