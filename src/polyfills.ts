/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 */

import 'zone.js';  // Included with Angular CLI.
import { Buffer } from 'buffer';

// Global needed for SockJS
(window as any).global = window;
(window as any).Buffer = Buffer;