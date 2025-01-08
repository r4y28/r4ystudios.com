(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"layout":"absolute","minWidth":0,"hash": "ba8d415020872e1e3d7b769d017cfd8f66045371e684115d02168b0af3f4381e", "definitions": [{"playbackBarHeadBorderSize":0,"minHeight":50,"toolTipFontFamily":"Arial","width":"100%","subtitlesTextShadowHorizontalLength":1,"minWidth":100,"playbackBarHeadShadow":true,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","toolTipPaddingBottom":4,"toolTipPaddingTop":4,"playbackBarBottom":5,"playbackBarBackgroundOpacity":1,"vrThumbstickRotationStep":20,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColorRatios":[0],"playbackBarHeight":10,"class":"ViewerArea","vrPointerSelectionTime":2000,"toolTipFontSize":"1.11vmin","playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","data":{"name":"Main Viewer"},"playbackBarRight":0,"progressRight":"33%","progressOpacity":0.7,"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"toolTipShadowColor":"#333138","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","subtitlesGap":0,"toolTipPaddingLeft":6,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","id":"MainViewer","surfaceReticleColor":"#FFFFFF","subtitlesBottom":50,"propagateClick":false,"subtitlesFontSize":"3vmin","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"progressHeight":2,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"toolTipFontColor":"#606060","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBarBorderRadius":2,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","progressBorderRadius":2,"height":"100%","playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressLeft":"33%","subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000"},{"click":"this.enableVR()","minWidth":1,"id":"IconButton_57BBC54B_4724_CA28_41B6_9A6A45E21D9E","propagateClick":false,"data":{"name":"IconButton6710"},"right":"6.39%","tabIndex":0,"class":"IconButton","bottom":"7.73%","height":23,"backgroundOpacity":0,"width":35,"maxWidth":35,"verticalAlign":"middle","maxHeight":23,"iconURL":"skin/IconButton_57BBC54B_4724_CA28_41B6_9A6A45E21D9E.png","horizontalAlign":"center","minHeight":1},{"viewerArea":"this.MainViewer","class":"Model3DPlayer","id":"MainViewerModel3DPlayer"},{"antialiasingLevel":0.3,"thumbnailUrl":"media/model_4C144823_46E7_5A1F_41D0_C64BB145152C_t.jpg","floorRadius":27.94,"label":trans('model_4C144823_46E7_5A1F_41D0_C64BB145152C.label'),"lights":["this.light_4D589C90_46E7_5A37_41C7_6ED0334A321F","this.light_4BBDD578_46FB_4AE8_41BB_0E8FE87C835D","this.light_4AA0A40A_46FB_4A28_41C8_C2726F4AF216","this.light_4A8AE8DA_46FB_5A28_41A4_1E3A7F48467E","this.light_49BCF2D7_46FB_4E38_41C6_D09220F02E64","this.light_495B6598_46FB_4A28_41BC_8340CF330D97"],"surfaceReticleMinRadius":15,"camera":"this.cam_4D5C0C8E_46E7_5A2B_4177_16BFF57B01B5","sphericalHarmonicsMaxDegree":3,"surfaceReticleRadius":0.02,"class":"Model3D","objects":[],"id":"model_4C144823_46E7_5A1F_41D0_C64BB145152C","backgroundColor":"#333333","data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"example","keepModel3DLoadedWithoutLocation":true},"surfaceSelectionCoef":2,"castShadow":true,"surfaceReticleMaxRadius":50,"environmentIntensity":0.5,"model":"this.res_4C10B826_46E7_5A18_41C8_282775D5BBAD"},{"id":"mainPlayList","items":[{"player":"this.MainViewerModel3DPlayer","media":"this.model_4C144823_46E7_5A1F_41D0_C64BB145152C","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem"}],"class":"PlayList"},{"intensity":0.62,"class":"AmbientLight","id":"light_4D589C90_46E7_5A37_41C7_6ED0334A321F"},{"pitch":19.66,"shadowTolerance":2,"castShadow":true,"class":"OrbitLight","yaw":31.36,"id":"light_4BBDD578_46FB_4AE8_41BB_0E8FE87C835D"},{"intensity":0.5,"class":"AmbientLight","id":"light_4AA0A40A_46FB_4A28_41C8_C2726F4AF216"},{"intensity":0.5,"class":"AmbientLight","id":"light_4A8AE8DA_46FB_5A28_41A4_1E3A7F48467E"},{"pitch":18.03,"shadowTolerance":2,"castShadow":true,"class":"OrbitLight","yaw":-142.8,"id":"light_49BCF2D7_46FB_4E38_41C6_D09220F02E64"},{"intensity":0.5,"class":"AmbientLight","id":"light_495B6598_46FB_4A28_41BC_8340CF330D97"},{"autoNearFar":true,"initialPitch":-0.77,"maxX":15.77,"class":"FirstPersonModel3DCamera","translationSpeed":0.509,"collisionDetection":false,"vrEnabled":true,"id":"cam_4D5C0C8E_46E7_5A2B_4177_16BFF57B01B5","minY":-5.25,"initialFov":85,"minX":-40.32,"initialX":-9.7,"minZ":-46.75,"initialZ":-2.51,"initialY":1.3,"maxY":14.56,"initialYaw":-40.02,"maxZ":37.06},{"levels":[{"class":"Model3DResourceLevel","url":"media/model_4C144823_46E7_5A1F_41D0_C64BB145152C/scene.glb"},{"tags":"mobile","url":"media/model_4C144823_46E7_5A1F_41D0_C64BB145152C/scene_mobile.glb","class":"Model3DResourceLevel"}],"id":"res_4C10B826_46E7_5A18_41C8_282775D5BBAD","class":"Model3DResource"}],"children":["this.MainViewer","this.IconButton_57BBC54B_4724_CA28_41B6_9A6A45E21D9E"],"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_57BBC54B_4724_CA28_41B6_9A6A45E21D9E], 'cardboardAvailable')","id":"rootPlayer","propagateClick":false,"backgroundColor":["#FFFFFF"],"data":{"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"volume":1,"rate":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false},"history":{},"defaultLocale":"en","name":"Player423"},"scrollBarColor":"#000000","gap":10,"backgroundColorRatios":[0],"scrollBarMargin":2,"class":"Player","left":447.6,"width":"100%","height":"100%","defaultMenu":["fullscreen","mute","rotation"],"scripts":{"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"clone":TDV.Tour.Script.clone,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"openLink":TDV.Tour.Script.openLink,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPixels":TDV.Tour.Script.getPixels,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setValue":TDV.Tour.Script.setValue,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizShowScore":TDV.Tour.Script.quizShowScore,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlays":TDV.Tour.Script.getOverlays,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"init":TDV.Tour.Script.init,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizStart":TDV.Tour.Script.quizStart,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getKey":TDV.Tour.Script.getKey,"quizFinish":TDV.Tour.Script.quizFinish,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMainViewer":TDV.Tour.Script.getMainViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"mixObject":TDV.Tour.Script.mixObject,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"disableVR":TDV.Tour.Script.disableVR,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getComponentByName":TDV.Tour.Script.getComponentByName,"enableVR":TDV.Tour.Script.enableVR,"toggleVR":TDV.Tour.Script.toggleVR,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"registerKey":TDV.Tour.Script.registerKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMapLocation":TDV.Tour.Script.setMapLocation,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"unregisterKey":TDV.Tour.Script.unregisterKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"downloadFile":TDV.Tour.Script.downloadFile,"createTween":TDV.Tour.Script.createTween,"existsKey":TDV.Tour.Script.existsKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"translate":TDV.Tour.Script.translate,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setLocale":TDV.Tour.Script.setLocale},"minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.3, Wed Jan 8 2025