import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { DepartmentModal } from './components/DepartmentModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Departments } from './pages/Departments';
import { Courses } from './pages/Courses';
import { Admissions } from './pages/Admissions';
import { Faculty } from './pages/Faculty';
import { Facilities } from './pages/Facilities';
import { Placements } from './pages/Placements';
import { EventsNews } from './pages/EventsNews';
import { Gallery } from './pages/Gallery';
import { StudentPortal } from './pages/StudentPortal';
import { Contact } from './pages/Contact';

export function App() {
  // Page routing state
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'about', 'departments', 'courses', 'admissions', 'faculty', 'facilities', 'placements', 'events', 'gallery', 'portal', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  // Modals state
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] = useState('');
  const [activeDepartmentModal, setActiveDepartmentModal] = useState(null);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'departments', 'courses', 'admissions', 'faculty', 'facilities', 'placements', 'events', 'gallery', 'portal', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApply = (courseId = '') => {
    setSelectedCourseForApply(courseId);
    setIsApplyOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onNavigate={navigateTo}
            onOpenApply={handleOpenApply}
            onSelectDepartment={(dept) => setActiveDepartmentModal(dept)}
          />
        );
      case 'about':
        return <About onNavigate={navigateTo} onOpenApply={handleOpenApply} />;
      case 'departments':
        return (
          <Departments
            onNavigate={navigateTo}
            onSelectDepartment={(dept) => setActiveDepartmentModal(dept)}
            onOpenApply={handleOpenApply}
          />
        );
      case 'courses':
        return <Courses onNavigate={navigateTo} onOpenApply={handleOpenApply} />;
      case 'admissions':
        return <Admissions onNavigate={navigateTo} onOpenApply={handleOpenApply} />;
      case 'faculty':
        return <Faculty onNavigate={navigateTo} />;
      case 'facilities':
        return <Facilities onNavigate={navigateTo} />;
      case 'placements':
        return <Placements onNavigate={navigateTo} onOpenApply={handleOpenApply} />;
      case 'events':
        return <EventsNews onNavigate={navigateTo} />;
      case 'gallery':
        return <Gallery onNavigate={navigateTo} />;
      case 'portal':
        return <StudentPortal onNavigate={navigateTo} />;
      case 'contact':
        return <Contact onNavigate={navigateTo} />;
      default:
        return (
          <Home
            onNavigate={navigateTo}
            onOpenApply={handleOpenApply}
            onSelectDepartment={(dept) => setActiveDepartmentModal(dept)}
          />
        );
    }
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenApply={() => handleOpenApply()}
      />

      {/* Main Active Page Content */}
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      {/* Reusable Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenApply={() => handleOpenApply()}
      />

      {/* Reusable Admission Application Modal */}
      <ApplyModal
        isOpen={isApplyOpen}
        defaultCourse={selectedCourseForApply}
        onClose={() => {
          setIsApplyOpen(false);
          setSelectedCourseForApply('');
        }}
      />

      {/* Reusable Department Detail Modal */}
      <DepartmentModal
        department={activeDepartmentModal}
        onClose={() => setActiveDepartmentModal(null)}
        onApply={() => {
          setActiveDepartmentModal(null);
          handleOpenApply();
        }}
        onNavigateFaculty={() => {
          setActiveDepartmentModal(null);
          navigateTo('faculty');
        }}
      />
    </div>
  );
}

export default App;
