import Link from 'next/link'
import { MainLayout } from '../../components/layout/MainLayout'


export default function PricingPage() {
    return (
        <MainLayout>
            <h1>Pricing Page</h1>

            <h1 className={'title'}>
                Ir a <Link href="/home">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>Pricing</code>
            </p>

        </MainLayout>
    )
}
