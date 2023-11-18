import Head from 'next/head';
import Link from 'next/link';
import { Button, PageHeader, Space, Typography, Steps } from '@arco-design/web-react';

const Step = Steps.Step;


export default function Home() {
    return (
        <>
            <Head>
                <title>VDM</title>
                <meta
                    name="description"
                    content="A tool for designing databases using pictures called entity-relationship diagrams."
                />
                <link rel="icon" href="/favicon.png" />
                
            </Head>
            <div className="index-container">
                <PageHeader
                    style={{
                        background: 'var(--color-bg-2)',
                        position: 'sticky',
                        top: 0,
                        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
                        zIndex: 99,
                    }}
                    title="VDM"
                    subTitle="A tool for designing databases using pictures called entity-relationship diagrams."
                    extra={
                        <Space>
                            <Link href="/graphs">
                                <Button type="primary">Get started</Button>
                            </Link>
                        </Space>
                    }
                />
                <div className="index-bg">
                <div className="hero-banner-content">
                        <h1>Simple & Easy</h1>
                        <p>Database designing & Data modeling tool</p>
                    </div>
                    <Link href="/graphs">
                        <Button
                            type="primary"
                            size="large"
                            className="start-button"
                            style={{
                                fontSize: '2em',
                                height: 'auto',
                            }}
                        >
                            Get started
                        </Button>
                    </Link>
                </div>

                <div className="index-steps">
                    <Steps
                        labelPlacement="vertical"
                        current={5}
                        style={{
                            maxWidth: '1200px',
                            margin: '100px auto',
                        }}
                    >
                        <Step title="Design data structures" description="Visually" />
                        <Step title="Create relationships" description="Drag and drop" />
                        <Step title="Export SQL scripts" description="It's that simple" />
                    </Steps>
                </div>

                <div className="index-video-container">
                    <div className="faq">
                        <h2>FAQ</h2>
                        <dl>
                            <dt>How to register?</dt>
                            <dd>No registration required, just start playing.</dd>
                        </dl>
                        <dl>
                            <dt>Where is the data stored?</dt>
                            <dd>
                                Saved in your computer&apos;s storage and index database, so
                                it&apos;s a good idea to create a copy before clearing your web
                                browser.
                            </dd>
                        </dl>
                        <dl>
                            <dt>Is it possible to collaborate across devices?</dt>
                            <dd>Not for the time being.</dd>
                        </dl>
                    </div>
                    <video src="/detail.mp4" muted autoPlay loop></video>
                </div>
                <div className="index-footer">
                    <div>
                        <strong>VDM</strong> | An eloquent database design tool, meticulously
                        crafted around the elegant framework of entity-relationship diagrams.
                    </div>
                    <Link href="/graphs">
                        <Button type="text">Lets gets started</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
