# Contributing to studious-memory

Thank you for your interest in contributing to studious-memory! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful and professional in all interactions. We're committed to providing a welcoming and inclusive environment.

## Getting Started

1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/your-username/studious-memory.git
   cd studious-memory
   ```
3. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

```bash
# Install dependencies
npm install

# Copy environment templates
cp server/.env.example server/.env
cp client/.env.example client/.env

# Start development server
npm run dev
```

## Making Changes

1. **Write clean, readable code**
   - Follow the existing code style
   - Run linting: `npm run lint`
   - Format code: `npm run format`

2. **Create meaningful commits**
   ```bash
   git commit -m "feat: Add new feature description"
   ```

3. **Test your changes**
   - Ensure frontend loads correctly
   - Test API endpoints manually
   - Check for console errors

## Commit Message Guidelines

Use conventional commits format:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build/dependency changes

## Pull Request Process

1. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request on GitHub**
   - Describe what your PR does
   - Reference any related issues
   - Include screenshots if UI changes

3. **Address review feedback**
   - Make requested changes
   - Commit and push updates

## Code Quality Standards

- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small
- Write DRY (Don't Repeat Yourself) code
- Ensure proper error handling

## Reporting Issues

Found a bug? Please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Questions?

Open a discussion or issue if you have questions about contributing.

Thank you for helping make studious-memory better! 🚀