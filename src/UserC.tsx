import React, {FC, memo} from 'react';

const UserC: FC<{foo: ()=>  void}> = memo(({foo}) => { //за доп цього не буде рендеритись якщо не буде змінюватись (не будуть приходити ніякі пропси)
    // використовувати тільки за умови що компонент дуууже важкий
    console.log('user');
foo();
    return (
        <div>
            user
        </div>
    );
});

export default UserC;