import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import DeferredSection from "./components/DeferredSection.jsx";
import SectionPlaceholder from "./components/SectionPlaceholder.jsx";
import Footer from "./components/Footer.jsx";

const ProductViewer = lazy(() => import("./components/ProductViewer.jsx"));
const Showcase = lazy(() => import("./components/Showcase.jsx"));
const Performance = lazy(() => import("./components/Performance.jsx"));
const Features = lazy(() => import("./components/Features.jsx"));
const Highlights = lazy(() => import("./components/Highlights.jsx"));

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <DeferredSection placeholder={<SectionPlaceholder title="Take a closer look." minHeight="93vh" />}>
                <Suspense fallback={<SectionPlaceholder title="Take a closer look." minHeight="93vh" />}>
                    <ProductViewer />
                </Suspense>
            </DeferredSection>
            <DeferredSection placeholder={<SectionPlaceholder title="Rocket Chip" minHeight="85vh" />}>
                <Suspense fallback={<SectionPlaceholder title="Rocket Chip" minHeight="85vh" />}>
                    <Showcase />
                </Suspense>
            </DeferredSection>
            <DeferredSection placeholder={<SectionPlaceholder title="Graphics performance" minHeight="100vh" />}>
                <Suspense fallback={<SectionPlaceholder title="Graphics performance" minHeight="100vh" />}>
                    <Performance />
                </Suspense>
            </DeferredSection>
            <DeferredSection placeholder={<SectionPlaceholder title="See it all in a new light." minHeight="100vh" />}>
                <Suspense fallback={<SectionPlaceholder title="See it all in a new light." minHeight="100vh" />}>
                    <Features />
                </Suspense>
            </DeferredSection>
            <DeferredSection placeholder={<SectionPlaceholder title="Upgrade highlights" minHeight="80vh" />}>
                <Suspense fallback={<SectionPlaceholder title="Upgrade highlights" minHeight="80vh" />}>
                    <Highlights />
                </Suspense>
            </DeferredSection>
            <Footer />
        </main>
    )
}

export default App
