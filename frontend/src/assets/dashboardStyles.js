export const dashboardStyles = {
  // Container
  container: "container mx-auto px-4 py-6",

  // Header
  headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
  headerTitle: "text-2xl font-bold text-gray-900",
  headerSubtitle: "text-gray-600",

  // Create Button
  createButton: "group relative px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-200",
  createButtonOverlay: "absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity",
  createButtonContent: "relative flex items-center gap-3",

  // Loading
  spinnerWrapper: "flex justify-center items-center py-12",
  spinner: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600",

  // Empty State
  emptyStateWrapper: "flex flex-col items-center justify-center py-12 text-center",
  emptyIconWrapper: "bg-violet-100 p-4 rounded-full mb-4",
  emptyTitle: "text-xl font-bold text-gray-900 mb-2",
  emptyText: "text-gray-600 max-w-md mb-6",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  // New Resume Card
  newResumeCard: "flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-blue-50 border-2 border-dashed border-violet-300 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg hover:border-violet-500 h-full",
  newResumeIcon: "w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center mb-4",
  newResumeTitle: "text-xl font-bold text-gray-900 mb-2 text-center",
  newResumeText: "text-gray-600 text-center",

  // Modal
  modalHeader: "flex justify-between items-center mb-4",
  modalTitle: "text-xl font-bold text-gray-900",
  modalCloseButton: "text-gray-500 hover:text-gray-700",

  // Delete Confirmation
  deleteIconWrapper: "bg-red-100 p-3 rounded-full mb-4",
  deleteTitle: "text-lg font-bold text-gray-900 mb-2",
  deleteText: "text-gray-600 mb-4",
};