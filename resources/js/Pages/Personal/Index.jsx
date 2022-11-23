import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout' 
const Index = ({auth,personal})=>{

    console.log(personal);
    return (
        <AuthenticatedLayout auth={auth}>
            asdasf
        </AuthenticatedLayout>
    )

}

export default Index;